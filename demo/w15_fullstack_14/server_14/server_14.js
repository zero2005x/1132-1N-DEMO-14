import express from "express";
import apiProductRouter_14 from "./routers/api/apiProductRouter_14.js";
import cors from "cors";
import logger from "morgan";

const app_14 = express();

// initial and call logger
app_14.use(logger("dev"));

app_14.use(cors());
app_14.use(express.static("public"));
app_14.set("view engine", "ejs");

app_14.use("/product_14/static", (req, res, next) => {
  console.log("static");
  res.render("product_14/static", {
    title: "Get Product - Static",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

app_14.use("/api/product_14", apiProductRouter_14);

app_14.use("/", (req, res, next) => {
  res.render("index", {
    title: "Express Server",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

const port = process.env.PORT || 5000;

app_14.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
