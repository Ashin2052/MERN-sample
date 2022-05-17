import { json } from "body-parser";
import express from "express";
import mongoose, { mongo } from "mongoose";

require("dotenv").config({ path: __dirname + "/.env" });

const app = express();

app.use(json());
app.listen(process.env.PORT, () => {
  console.log("server is listening :" + process.env.PORT);
});
mongoose
  .connect(process.env.URL || "mongodb://localhost/cms")
  .then((result) => {
    console.log("successfully conected to " + process.env.DB_NAME);
  })
  .catch((err) => {
    console.log("ERROR:", err.message);
  });
