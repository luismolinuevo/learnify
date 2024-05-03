import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// import { apiRouter } from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// app.use("/api", apiRouter);

app.listen(3001, () => {
  console.log("Connected to server");
});