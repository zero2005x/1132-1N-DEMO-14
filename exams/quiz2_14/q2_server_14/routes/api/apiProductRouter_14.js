import express from "express";
const router = express.Router();

import db from "../../utils/database.js";

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query(`select * from product_14`);
    // console.log('results', JSON.stringify(results.rows));
    res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Failed to fetch products",
      details: error.message,
    });
  }
});

export default router;
