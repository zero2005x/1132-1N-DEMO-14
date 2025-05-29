import express from "express";
import db from "../../utils/database.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const results = await db.query("SELECT * FROM product_14");
    console.log("Results", JSON.stringify(results.rows));
    res.render("product_14/index", {
      data: results.rows,
      name: "Liang-Ting Lin",
      title: "Gets Product List from PostgreSQL Server",
      id: "913410014",
    });
  } catch (error) {
    console.error("Error testing the database connection", error);
  }
});

export default router;
