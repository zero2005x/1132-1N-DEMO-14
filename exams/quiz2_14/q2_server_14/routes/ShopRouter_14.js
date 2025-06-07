import express from "express";
const router = express.Router();

import db from "../utils/database.js";

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`select * from shop_14_womens`);
    console.log("results", JSON.stringify(results.rows));
    // Remove res.json(results.rows); - this line causes the error
    res.render("shop_14/index", {
      data: results.rows,
      title: "Get Products From PostgreSQL Server",
      name: "Liang-Ting Lin",
      id: "913410014",
    });
  } catch (error) {
    console.log(error);
    res.status(500).render("error", { error: "Database error" });
  }
});

// Womens Static Page (原本的 /static 路由)
router.get("/static", async (req, res, next) => {
  res.render("shop_14/womens_static", {
    title: "Womens -- Static Page",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

// Hats Static Page - 修正檔案名稱和路由
router.get("/hats", async (req, res, next) => {
  res.render("shop_14/hats_static", {
    title: "Hats -- Static Page",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

// Jackets Static Page - 修正檔案名稱和路由
router.get("/jackets", async (req, res, next) => {
  res.render("shop_14/jackets_static", {
    title: "Jackets -- Static Page",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

// Sneakers Static Page - 保持不變
router.get("/sneakers", async (req, res, next) => {
  res.render("shop_14/sneakers_static", {
    title: "Sneakers -- Static Page",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

// Mens Static Page - 保持不變
router.get("/mens", async (req, res, next) => {
  res.render("shop_14/mens_static", {
    title: "Mens -- Static Page",
    name: "Liang-Ting Lin",
    id: "913410014",
  });
});

export default router;
