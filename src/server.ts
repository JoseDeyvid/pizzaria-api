import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes"
import path = require("path");

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 5000;

// const cors = require("cors");
// const corsOptions = {
//   origin: '*',
//   credentials: true,           
//   optionSuccessStatus: 200,
// }
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(cors(corsOptions)) 
app.use(express.json())
app.use(router)

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")))

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TS Server");
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})


// const cors=require("cors");
// const corsOptions ={
//    origin:'*',
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) 