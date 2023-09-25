import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const port = 1337;

app.use(cors());
app.use(bodyParser.json());

let db;

async function connectDB() {
  let client = new MongoClient("mongodb://127.0.0.1:27017/fundacionPorMexico");
  await client.connect();
  db = client.db();
  console.log("Conectado a la base de datos");
}

//getList, getMany, getManyReference
app.get("/tickets", async (request, response)=>{
  if ("_sort" in request.query){
      let sortBy=request.query._sort;
      let sortOrder=request.query._order=="ASC"?1:-1;
      let start=Number(request.query._start);
      let end=Number(request.query._end);
      let sorter={}
      sorter[sortBy]=sortOrder
      let data=await db.collection('tickets').find({}).sort(sorter).project({_id:0}).toArray();
      response.set('Access-Control-Expose-Headers', 'X-Total-Count')
      response.set('X-Total-Count', data.length)
      data=data.slice(start, end)
      response.json(data);
  }else if ("id" in request.query){
      let data=[]
      for (let index=0; index<request.query.id.length; index++){
          let dataObtain=await db.collection('tickets').find({id: Number(request.query.id[index])}).project({_id:0}).toArray();
          data=await data.concat(dataObtain)
      }
      response.json(data);
  }else {
      let data=[]
      data=await db.collection('tickets').find(request.query).project({_id:0}).toArray();
      response.set('Access-Control-Expose-Headers', 'X-Total-Count')
      response.set('X-Total-Count', data.length)
      response.json(data)
  }
})

//getOne
app.get("/tickets/:id", async (req, res) => {
  let data = await db.collection("tickets").find({"id": Number(req.params.id)}).project({_id:0}).toArray();
  res.json(data[0]);
})

//create
app.post("/tickets", async (request, response)=>{
  let addValue=request.body
  let data=await db.collection('tickets').find({}).toArray();
  let id=data.length+1;
  addValue["id"]=id;
  data=await db.collection('tickets').insertOne(addValue);
  response.json(data);
}) 

//update
app.put("/tickets/:id", async (req, res) => {
  let addValues = req.body;
  addValues["id"] = Number(req.params.id);
  let data = await db.collection("tickets").updateOne({id: addValues["id"]}, {"$set":addValues});
  data = await db.collection("tickets").find({"id": Number(req.params.id)}).project({_id:0}).toArray();
  res.json(data[0]);
})

app.post("/registrarse", async(request, response)=>{
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
                  let data=await db.collection('tickets').find({}).toArray();
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
})

app.post("/login", async (request, response) => {
  let user = request.body.username;
  let pass = request.body.password;

  let data = await db.collection("users").findOne({ "usuario": user });

  if (data === null) {
    response.sendStatus(401); // Usuario incorrecto
  } else {
    bcrypt.compare(pass, data.contrasena, (error, result) => {
      if (result) {
        let token = jwt.sign({ usuario: data.usuario }, "secretKey", { expiresIn: 600 });
        response.json({ "token": token, "id": data.usuario, "name": data.name });
      } else {
        response.sendStatus(403); // Contraseña incorrecta
      }
    });
  }
});

//delete
app.delete("/tickets/:id", async (req, res) => {
  let data = await db.collection("tickets").deleteOne({id: Number(req.params.id)})
  res.json(data);
})

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

app.listen(port, () => {
  connectDB();
  console.log(`La aplicación está escuchando en http://127.0.0.1:${port}`);
});
