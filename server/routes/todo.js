import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let todoList = await db.collection("todos");
  let results = await todoList.find({}).toArray();
  res.status(200).send(results);
});

router.post("/", async (req, res) => {
  try {
    let newTodo = {
      name: req.body.name,
      priority: req.body.priority,
    };
    let todoList = await db.collection("todos");
    let result = await todoList.insertOne(newTodo);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding a new todo" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let updates = {
      $set: {
        name: req.body.name,
        priority: req.body.priority,
      },
    };
    let todoList = await db.collection("todos");
    let result = await todoList.updateOne(query, updates);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.send("Error updating todo note").status(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let todoList = await db.collection("todos");
    let result = await todoList.deleteOne(query);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.send("Error deleting todo note").status(500);
  }
});

export default router;
