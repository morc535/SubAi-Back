import express from "express";
import router from "./routes/homeRouter.js";

const app = express();
const PORT = 3000;

//app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(router);

app.get("/", function (req, res) {
  res.send("hi");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
