import express from "express";
import authRouter from "./routes/authRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", authRouter);

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
