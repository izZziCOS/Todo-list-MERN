import express from "express";
import cors from "cors";
import todo from "./routes/todo.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", todo);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
