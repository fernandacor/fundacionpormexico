import fs from "fs";
import { MongoClient } from "mongodb";
import path from "path";

// Directorio que contiene los archivos JSON
const jsonDirectory = "./db";

let db;
const client = new MongoClient("mongodb://127.0.0.1:27017/fundacionPorMexico");

async function connectDB() {
  await client.connect();
  db = client.db();
  console.log("Conectado a la base de datos");

  const jsonFiles = fs.readdirSync(jsonDirectory);
  jsonFiles.forEach((jsonFile) => {
    const collectionName = path.parse(jsonFile).name;

    const data = JSON.parse(
      fs.readFileSync(path.join(jsonDirectory, jsonFile))
    );

    const collection = db.collection(collectionName);

    collection.insertMany(data, (err, result) => {
      if (err) throw err;
      console.log(
        `Importados ${result.insertedCount} documentos en ${collectionName}`
      );
    });
  });

  client.close();
}

connectDB();

// // Conecta a MongoDB y realiza la importación
// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   if (err) throw err;

//   console.log("Conectado a MongoDB");

//   // const db = client.db(dbName);
//   // const jsonFiles = fs.readdirSync(jsonDirectory);

//   // jsonFiles.forEach((jsonFile) => {
//   //   const collectionName = path.parse(jsonFile).name;

//   //   const data = JSON.parse(
//   //     fs.readFileSync(path.join(jsonDirectory, jsonFile))
//   //   );

//   //   const collection = db.collection(collectionName);

//   //   collection.insertMany(data, (err, result) => {
//   //     if (err) throw err;
//   //     console.log(
//   //       `Importados ${result.insertedCount} documentos en ${collectionName}`
//   //     );
//   //   });
//   // });

//   client.close();
// });
