import fs from "fs";
import { MongoClient } from "mongodb";

const data = JSON.parse(fs.readFileSync("./db/users.json", "utf-8").toString());

const uri = "mongodb://127.0.0.1:2701";
const dbName = "fundacionPorMexico";

async function importData() {
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db(dbName);
  const users = db.collection("users");

  await users.drop();
  await db.createCollection("users");
  await users.insertMany(data);

  client.close();
}

importData();
