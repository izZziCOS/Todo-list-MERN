import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
} catch (err) {
  console.error(err);
}

let db = client.db("todoList");

export default db;
