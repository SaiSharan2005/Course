import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from "cors"
import "./config/mysql"
import api from "./routes/api"
import path from "path";

require("./config/db")

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));


app.use("/api",api)


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Servers");
});

 
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});