import express from "express";
import db from "../../utlis/database.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query("SELECT * FROM product_14");
    console.log("results", JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.error("Error testing the database connection", error);
  }
});

export default router;
