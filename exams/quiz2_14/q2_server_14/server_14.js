import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// 獲取當前文件的目錄
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

import ShopRouter from "./routes/ShopRouter_14.js";
import apiProductRouter from "./routes/api/apiProductRouter_14.js";
import ProductRouter from "./routes/ProductRouter_14.js";
import apiShopRouter from "./routes/api/apiShopRouter_14.js";

const app_14 = express();

// 添加客戶端靜態文件服務
app_14.use(express.static(path.join(__dirname, "../q2_client_14")));
app_14.use(cors());
app_14.use(logger("dev"));
app_14.use(express.static("public"));

app_14.set("view engine", "ejs");

// shop routers
app_14.use("/api/shop_14", apiShopRouter);
app_14.use("/shop_14", ShopRouter);
app_14.use("/shop_14/static", (req, res, next) => {
  res.render("shop_14/static_14", {
    title: "Get Shops - Static",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

// product routes
app_14.use("/api/product_14", apiProductRouter);
app_14.use("/api/shop_14", apiShopRouter);
app_14.use("/product_14", ProductRouter);
app_14.use("/product_14/static", (req, res, next) => {
  res.render("product_14/static_14", {
    title: "Get Products - Static",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

// blog routes
app_14.use("/blog_14/static", (req, res, next) => {
  res.render("blog_14/static_14", {
    title: "Get Blogs - Static",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

app_14.use("/", (req, res, next) => {
  res.render("index", {
    title: "Express",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

const port = process.env.PORT || 5000;

app_14.listen(port, () => {
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`);
});
