import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion } from "mongodb";

const dbUser = "equipo";
const dbPassword = "cJWGwAqOZ7lIungJ";
const dbName = "fundacionPorMexico";
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xflhwk3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
const port = 1337;
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
  toLog = {};
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
      .project({ _id: 0, id: 1, nombre: 1, materia: 1 })
      .toArray();
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
          expiresIn: 600,
        });
        response.json({ token: token, id: data.usuario, nombre: data.nombre });
      } else {
        response.sendStatus(403); // Contraseña incorrecta
      }
    });
  }
});

//delete
app.delete("/tickets/:id", async (req, res) => {
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

app.get("/users", async (req, res) => {
  let data = await db
    .collection("users")
    .find()
    //.project({ _id: 0, id: 1, nombre: 1, apellidoMaterno: 1 })
    .toArray();
  res.set("Access-Control-Expose-Headers", "X-Total-Count");
  res.set("X-Total-Count", data.length);
  res.json(data);
});

app.post("/users", async (request, response) => {
  let token = request.get("Authentication");
  let verifiedToken = await jwt.verify(token, "secretKey");
  let addValue = request.body;
  let data = await db.collection("users").find({}).toArray();
  let id = data.length + 1;
  addValue["id"] = id;
  let pass = addValue["contrasena"];
  console.log(request.body);
  data = await db.collection("users").findOne({ usuario: addValue["usuario"] });
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
});

/*
app.post("/users", async (request, response) => {
  let user=request.body.username;
  let pass=request.body.password;
  let name=request.body.name;
  let flastname=request.body.lastName;
  let slastname=request.body.slastName;
  console.log(request.body)
  let data= await db.collection("users").findOne({"usuario": user});
  if(data==null){
      try{
          bcrypt.genSalt(10, (error, salt)=>{
              bcrypt.hash(pass, salt, async(error, hash)=>{
                  let data=await db.collection('users').find({}).toArray();
                  let id=data.length+1;
                  let usuarioAgregar={"id": id, "usuario": user, "contrasena": hash, "nombre": name, "apellidoPaterno":flastname, "apellidoMaterno":slastname};
                  data= await db.collection("users").insertOne(usuarioAgregar);
                  response.sendStatus(201);
              })
          })
      }catch{
          response.sendStatus(401);
      }
  }else{
      response.sendStatus(401)
  }
})*/

app.get("/users/:id", async (request, response) => {
  try {
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

app.listen(port, () => {
  connectDB();
  console.log(`La aplicación está escuchando en http://127.0.0.1:${port}`);
});
