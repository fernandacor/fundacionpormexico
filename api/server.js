import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion } from "mongodb";

const dbUser = "equipo";
const dbPassword = "cJWGwAqOZ7lIungJ";
const dbName = "fundacionPorMexico";
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xflhwk3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
const port = 443;
let db;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  await client.connect();
  db = client.db(dbName);
  console.log("Conectado a la base de datos");
}

async function log(sujeto, accion, objeto) {
  let toLog = {};
  toLog["timestamp"] = new Date();
  toLog["sujeto"] = sujeto;
  toLog["accion"] = accion;
  toLog["objeto"] = objeto;
  await db.collection("log").insertOne(toLog);
}

//getList, getMany, getManyReference
app.get("/tickets", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let authData = await db
      .collection("users")
      .findOne({ usuario: verifiedToken.usuario });
    let parametersFind = {};
    if (authData.permissions == "Coordinador") {
      parametersFind["usuario"] = verifiedToken.usuario;
    }

    if ("_sort" in request.query) {
      let sortBy = request.query._sort;
      let sortOrder = request.query._order == "ASC" ? 1 : -1;
      let start = Number(request.query._start);
      let end = Number(request.query._end);
      let sorter = {};
      sorter[sortBy] = sortOrder;
      let data = await db
        .collection("tickets")
        .find(parametersFind)
        .sort(sorter)
        .project({ _id: 0 })
        .toArray();
      response.set("Access-Control-Expose-Headers", "X-Total-Count");
      response.set("X-Total-Count", data.length);
      data = data.slice(start, end);
      response.json(data);
    } else if ("id" in request.query) {
      let data = [];
      for (let index = 0; index < request.query.id.length; index++) {
        let dataObtain = await db
          .collection("tickets")
          .find({ id: Number(request.query.id[index]) })
          .project({ _id: 0 })
          .toArray();
        data = await data.concat(dataObtain);
      }
      response.json(data);
    } else {
      let data = [];
      data = await db
        .collection("tickets")
        .find(request.query)
        .project({ _id: 0 })
        .toArray();
      response.set("Access-Control-Expose-Headers", "X-Total-Count");
      response.set("X-Total-Count", data.length);
      response.json(data);
    }
  } catch {
    response.sendStatus(401);
  }
});

//getOne
app.get("/tickets/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let authData = await db
      .collection("users")
      .findOne({ usuario: verifiedToken.usuario });
    let parametersFind = { id: Number(request.params.id) };
    if (authData.permissions == "Coordinador") {
      parametersFind["usuario"] = verifiedToken.usuario;
    }
    let data = await db
      .collection("tickets")
      .find(parametersFind)
      .project({ _id: 0 })
      .toArray();
    log(verifiedToken.usuario, "ver objeto", request.params.id);
    response.json(data[0]);
  } catch {
    response.sendStatus(401);
  }
});

//create
app.post("/tickets", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let addValue = request.body;
    let data = await db.collection("tickets").find({}).toArray();
    let id = data.length + 1;
    addValue["id"] = id;
    addValue["usuario"] = verifiedToken.usuario;
    data = await db.collection("tickets").insertOne(addValue);
    log(verifiedToken.usuario, "creó un ticket", request.params.id);
    response.json(data);
  } catch {
    response.sendStatus(401);
  }
});

//update
app.put("/tickets/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let addValue = request.body;
    addValue["id"] = Number(request.params.id);
    let data = await db
      .collection("tickets")
      .updateOne({ id: addValue["id"] }, { $set: addValue });
    data = await db
      .collection("tickets")
      .find({ id: Number(request.params.id) })
      .project({ _id: 0 })
      .toArray();
    console.log(request.params);
    console.log(data);
    console.log(data[0].status);
    log(
      verifiedToken.usuario,
      "actualizó ticket a '" + data[0].status + "'",
      request.params.id
    );
    response.json(data[0]);
  } catch {
    response.sendStatus(401);
  }
});

app.post("/login", async (request, response) => {
  let user = request.body.username;
  let pass = request.body.password;

  let data = await db.collection("users").findOne({ usuario: user });

  if (data === null) {
    response.sendStatus(401); // Usuario incorrecto
  } else {
    bcrypt.compare(pass, data.contrasena, (error, result) => {
      if (result) {
        let token = jwt.sign({ usuario: data.usuario }, "secretKey", {
          expiresIn: "24hr",
        });
        log(user, "login", "");
        response.json({
          token: token,
          id: data.usuario,
          nombre: data.nombre,
          permissions: data.permissions,
          avatar: data.avatar,
        });
      } else {
        response.sendStatus(403); // Contraseña incorrecta
      }
    });
  }
});

//delete
app.delete("/tickets/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let data = await db
      .collection("tickets")
      .deleteOne({ id: Number(request.params.id) });
    response.json(data);
  } catch {
    response.sendStatus(401);
  }
});

app.get("/users", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let data = await db
      .collection("users")
      .find()
      //.project({ _id: 0, id: 1, nombre: 1, apellidoMaterno: 1 })
      .toArray();
    response.set("Access-Control-Expose-Headers", "X-Total-Count");
    response.set("X-Total-Count", data.length);
    response.json(data);
  } catch {
    response.sendStatus(401);
  }
});

app.post("/users", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let addValue = request.body;
    let data = await db.collection("users").find({}).toArray();
    let id = data.length + 1;
    addValue["id"] = id;
    let pass = addValue["contrasena"];
    console.log(request.body);
    data = await db
      .collection("users")
      .findOne({ usuario: addValue["usuario"] });
    if (data == null) {
      try {
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(pass, salt, async (error, hash) => {
            let data = await db.collection("users").find({}).toArray();
            addValue["contrasena"] = hash;
            console.log(addValue);
            //let usuarioAgregar={"id": id, "usuario": user, "contrasena": hash, "nombre": name, "apellidoPaterno":flastname, "apellidoMaterno":slastname};
            data = await db.collection("users").insertOne(addValue);
            response.json(data);
          });
        });
      } catch {
        response.sendStatus(401);
      }
    } else {
      response.sendStatus(401);
    }
  } catch {
    response.sendStatus(401);
  }
});

app.get("/users/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let data = await db
      .collection("users")
      .find({ id: Number(request.params.id) })
      .project({ _id: 0 })
      .toArray();
    response.json(data[0]);
  } catch {
    response.sendStatus(401);
  }
});

app.put("/users/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let addValue = request.body;
    addValue["id"] = Number(request.params.id);
    let data = await db
      .collection("users")
      .updateOne({ id: addValue["id"] }, { $set: addValue });
    data = await db
      .collection("users")
      .find({ id: Number(request.params.id) })
      .project({ _id: 0 })
      .toArray();
    response.json(data[0]);
  } catch {
    response.sendStatus(401);
  }
});

app.delete("/users/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let data = await db
      .collection("users")
      .deleteOne({ id: Number(request.params.id) });
    response.json(data);
  } catch {
    response.sendStatus(401);
  }
});

app.get("/reports", async (request, response) => {
  try {
    //let token = request.get("Authentication");
    //let verifiedToken = await jwt.verify(token, "secretKey");
    let data = await db
      .collection("reports")
      .find()
      //.project({ _id: 0, id: 1, nombre: 1, apellidoMaterno: 1 })
      .toArray();
    data.reverse();
    response.set("Access-Control-Expose-Headers", "X-Total-Count");
    response.set("X-Total-Count", data.length);
    response.json(data);
  } catch {
    response.sendStatus(401);
  }
});

app.get("/reports/:id", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let data = await db
      .collection("reports")
      .find({ id: Number(request.params.id) })
      .toArray();
    response.set("Access-Control-Expose-Headers", "X-Total-Count");
    response.set("X-Total-Count", data.length);
    console.log(data);
    response.json(data);
  } catch {
    response.sendStatus(401);
  }
});

app.post("/reports", async (request, response) => {
  try {
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    let { startDate, endDate } = request.body; // Fechas de inicio y fin desde el frontend

    // Validar las fechas
    if (new Date(startDate) > new Date(endDate)) {
      throw new Error(
        "La fecha de inicio no puede ser mayor que la fecha final"
      );
    }
    // Calcular promedio de días de resolución
    let averageResolutionDays = await calculateAverageResolutionDays(
      startDate,
      endDate
    );

    // Calcular sumatoria de tickets por categoría
    let categorySummaries = await calculateCategorySummaries(
      startDate,
      endDate
    );
    categorySummaries = categorySummaries.map((item) => {
      return {
        name: item.categoria,
        value: item.tickets,
      };
    });

    // Calcular sumatoria de tickets por aula
    let classroomSummaries = await calculateClassroomSummaries(
      startDate,
      endDate
    );
    classroomSummaries = classroomSummaries.map((item) => {
      return {
        name: item.aula,
        value: item.tickets,
      };
    });

    // Calcular sumatoria de tickets por estatus
    let statusSummaries = await calculateStatusSummaries(startDate, endDate);
    statusSummaries = statusSummaries.map((item) => {
      let color;
      item.estatus == "Listo"
        ? (color = "emerald")
        : item.estatus == "En progreso"
        ? (color = "yellow")
        : (color = "rose");
      return {
        name: item.estatus,
        value: item.tickets,
        color: color,
      };
    });

    let data = await db.collection("reports").find({}).toArray();
    let id = data.length + 1;
    console.log(id);
    // Insertar el informe en la colección de reports
    const reportData = {
      fechaInicio: startDate,
      fechaFin: endDate,
      promedioDiasResolucion: averageResolutionDays,
      categorias: categorySummaries,
      aulas: classroomSummaries,
      estatuses: statusSummaries,
      id: id,
    };
    data = await db.collection("reports").insertOne(reportData);

    response.json(data);
  } catch (error) {
    console.error(error);
    response.sendStatus(401);
  }
});

function limpiarNombre(string) {
  return string
    .normalize("NFD") // Esto normaliza los caracteres diacríticos (como tildes) en caracteres separados. Por ejemplo, "á" se convierte en "a".
    .replace(/[\u0300-\u036f]/g, "") // Esto elimina cualquier caracter diacrítico restante.
    .split(" ") // Divide el string en un array de palabras.
    .map((word, index) => {
      // Busca sobre cada palabra en el array.
      if (index === 0) {
        return word.toLowerCase(); // Si es la primera palabra (índice 0), la convierte a minúsculas.
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Si no es la primera palabra, convierte la primera letra a mayúscula y el resto a minúsculas.
      }
    })
    .join(""); //  Une las palabras del array de nuevo en un solo string.
}

async function calculateAverageResolutionDays(startDate, endDate) {
  const tickets = await db
    .collection("tickets")
    .find({
      // Busca en la colección de "tickets" de la base de datos los documentos que tienen una fecha de resolución dentro del rango especificado
      fecha_resuelto: {
        $gte: startDate,
        $lte: endDate,
      },
    })
    .toArray(); // convierte el resultado en un arreglo.

  //Esto utiliza el método reduce para sumar los días de resolución de todos los tickets.
  // La función de reducción toma dos argumentos: total (el acumulador) y ticket (el elemento actual).
  // La función flecha => simplemente suma el valor de ticket.dias_resolucion al total.
  const totalDias = tickets.reduce(
    (total, ticket) => total + ticket.dias_resolucion,
    0
  );

  return totalDias / tickets.length; // Devuelve el promedio de días de resolución, dividiendo la suma total de los días de resolución entre el número total de tickets.
}

async function calculateCategorySummaries(startDate, endDate) {
  const tickets = await db
    .collection("tickets")
    .find({
      // Esto busca en la colección de "tickets" de la base de datos los documentos que tienen una fecha de resolución dentro del rango especificado
      fecha: {
        $gte: startDate,
        $lte: endDate,
      },
    })
    .toArray(); // Convierte el resultado en un arreglo.

  const categoryCounts = {};

  tickets.forEach((ticket) => {
    //  Esto busca sobre cada ticket en el arreglo tickets.
    const categoria = ticket.categoria; // Obtiene la categoría del ticket actual.
    categoryCounts[categoria] = (categoryCounts[categoria] || 0) + 1; // Esto incrementa el contador de la categoría actual en el objeto categoryCounts.
    //Si la categoría no existe en categoryCounts, se inicializa con 0 antes de incrementarla en 1.
  });

  // Devuelve un arreglo de objetos. Cada objeto tiene una propiedad categoria y una propiedad tickets
  return Object.keys(categoryCounts).map((categoria) => ({
    categoria,
    tickets: categoryCounts[categoria],
  }));
}

async function calculateClassroomSummaries(startDate, endDate) {
  const tickets = await db
    .collection("tickets")
    .find({
      // Lo mismo que la de arriba
      fecha: {
        $gte: startDate,
        $lte: endDate,
      },
    })
    .toArray(); // Convierte el resultado en un arreglo.

  const classroomCounts = {};

  tickets.forEach((ticket) => {
    //  Esto busca sobre cada ticket en el arreglo tickets.
    const aula = ticket.usuario; // Obtiene el usuario (hay que cambiarlo a aula) del ticket actual.
    classroomCounts[aula] = (classroomCounts[aula] || 0) + 1; // Esto incrementa el contador del usuario actual en el objeto classroomCounts.
    //Si el usuario no existe en classroomCounts, se inicializa con 0 antes de incrementarla en 1.
  });

  // Devuelve un arreglo de objetos. Cada objeto tiene una propiedad aula y una propiedad tickets
  return Object.keys(classroomCounts).map((aula) => ({
    aula,
    tickets: classroomCounts[aula],
  }));
}

async function calculateStatusSummaries(startDate, endDate) {
  const tickets = await db
    .collection("tickets")
    .find({
      // Lo mismo que la de arriba
      fecha: {
        $gte: startDate,
        $lte: endDate,
      },
    })
    .toArray(); // Convierte el resultado en un arreglo.

  const statusCounts = {};

  tickets.forEach((ticket) => {
    //  Esto busca sobre cada ticket en el arreglo tickets.
    const status = ticket.status; // Obtiene el estatus del ticket actual.
    statusCounts[status] = (statusCounts[status] || 0) + 1; // Esto incrementa el contador del usuario actual en el objeto statusCounts.
    //Si el status no existe en statusCounts, se inicializa con 0 antes de incrementarla en 1.
  });

  // Devuelve un arreglo de objetos. Cada objeto tiene una propiedad status y una propiedad tickets
  return Object.keys(statusCounts).map((status) => ({
    estatus: status,
    tickets: statusCounts[status],
  }));
}

app.put('/reports', async (request, response) => {
  try{
    let token = request.get("Authentication");
    let verifiedToken = await jwt.verify(token, "secretKey");
    
  }catch{

  }
})

https
  .createServer(
    {
      cert: fs.readFileSync("backend.cer"),
      key: fs.readFileSync("backend.key"),
    },
    app
  )
  .listen(port, () => {
    connectDB();
    console.log(`La aplicación está escuchando en https://fass:${port}`);
  });
