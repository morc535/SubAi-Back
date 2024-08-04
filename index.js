import express from "express";
import router from "./routes/homeRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const connectionString = process.env.CONNECTION_STRING;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.get("/", function (req, res) {
  res.send("hi");
});

mongoose
  .connect(connectionString)
  .then(() => {
    app.listen(PORT, function (err) {
      if (err) console.log(err);
      console.log("Server listening on PORT", PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
