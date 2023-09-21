import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";

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
app.get('tickets', async (req, res) => {
  if("_sort" in req.query){ //List
    let sortBy=req.query._sort;
    let sortOrder=req.query._order=="ASC"?1:1;
    let start = Number(req.query._start)
    let end = Number(req.query._end)
    let sorter={}
    sorter[sortBy] = sortOrder;
    let data = await db.collection("tickets").find({}).sort(sorter).project({_id:0}).toArray();
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.set("X-Total-Count", data.length);
    data = data.slice(start, end);
    res.json(data);
  } else if ("id" in req.query){ // Many
    let data = []
    for(let index=0; index < req.query.id.length; index++){
      let dbData = await db.collection("tickets").find({id: Number(req.query.id[index])}).project({_id:0}).toArray();
      data = await data.concat(dbData);
    }
    res.json(data);
  } else { // Reference
    let data = await db.collection("tickets").find({id: req.query}).project({_id:0}).toArray();
    res.set("Access-Control-Expose-Headers", "X-Total-Count");
    res.set("X-Total-Count", data.length);
    res.json(data);
  }
})

//getOne
app.get("/tickets/:id", async (req, res) => {
  let data = await db.collection("tickets").find({id: Number(req.params.id)}).project({_id:0}).toArray();
  res.json(data[0]);
})
//create

//update
app.put("/tickets/:id", async (req, res) => {
  let addValues = req.body;
  addValues["id"] = Number(req.params.id);
  let data = await db.collection("tickets").updateOne({id: addValues["id"]}, {"$set":addValues});
  data = await db.collection("tickets").find({id: Number(req.params.id)}).project({_id:0}).toArray();
  res.json(data[0]);
})
//delete

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
