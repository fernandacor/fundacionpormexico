import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = 1337;
app.use(cors());

let db;

async function connectDB() {
  let client = new MongoClient("mongodb://127.0.0.1:27017/db401test");
  await client.connect();
  db = client.db();
  console.log("Conectado a la base de datos");
}

app.get("/test", async (req, res) => {
  let data = await db
    .collection("test")
    .find()
    .project({ _id: 0, id: 1, nombre: 1, materia: 1 })
    .toArray();
  res.set("Access-Control-Expose-Headers", "X-Total-Count");
  res.set("X-Total-Count", data.length);
  res.json(data);
});

app.delete("/test/:id", async (req, res) => {
  let data = await db.collection("test").deleteOne({ id: req.params.id });
  res.json(data);
});

app.listen(port, () => {
  connectDB();
  console.log(`La aplicación está escuchando en http://127.0.0.1:${port}`);
});
