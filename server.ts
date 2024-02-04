import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from "cors"
import "./config/mysql"
import api from "./routes/api"
import path from "path";

// require("./config/db")
const db = require("./models")

dotenv.config();  
db.sequelize.sync().then((req:Response)=>{
  app.listen(3001,()=>{
    console.log("Server runnign on 3001")
  })
})
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));


app.use("/api",api)


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Servers");
});

 
// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });