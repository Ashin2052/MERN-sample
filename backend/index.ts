import { json } from "body-parser";
import express from "express";
import mongoose, { mongo } from "mongoose";
import routes from './src/routes/routes';

require("dotenv").config({ path:__dirname + "/config/dev.env" });

const app = express();
const connectionString = process.env.URL || "mongodb://mongo:27017/cms"
app.use(json());
app.listen(process.env.PORT, () => {
  console.log("server is listening :" + process.env.PORT);
});
app.use(routes);

mongoose
  .connect(connectionString)
  .then((result) => {
    console.log("successfully conected to " + process.env.DB_NAME);
  })
  .catch((err) => {
    console.log("ERROR:", err.message);
  });

