import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Codec Server!");
});

app.listen(8080, () => {
  console.log("[server]: Server is running at http://localhost:8080");
});
