import express from "express";
import db from "../../utils/database.js"; // Change from 'pool' to 'db'

const router = express.Router();

// GET /api/shop_14 - 取得所有商品類別資料
router.get("/", async (req, res) => {
  try {
    // 查詢所有類別的商品 - Use 'db' instead of 'pool'
    const hatsQuery = "SELECT * FROM shop_14_hats ORDER BY pId";
    const jacketsQuery = "SELECT * FROM shop_14_jackets ORDER BY pId";
    const sneakersQuery = "SELECT * FROM shop_14_sneakers ORDER BY pId";
    const womensQuery = "SELECT * FROM shop_14_womens ORDER BY pId";
    const mensQuery = "SELECT * FROM shop_14_mens ORDER BY pId";
    const productsQuery = "SELECT * FROM product_14 ORDER BY id";

    const [
      hatsResult,
      jacketsResult,
      sneakersResult,
      womensResult,
      mensResult,
      productsResult,
    ] = await Promise.all([
      db.query(hatsQuery),
      db.query(jacketsQuery),
      db.query(sneakersQuery),
      db.query(womensQuery),
      db.query(mensQuery),
      db.query(productsQuery),
    ]);

    const shopData = {
      hats: hatsResult.rows,
      jackets: jacketsResult.rows,
      sneakers: sneakersResult.rows,
      womens: womensResult.rows,
      mens: mensResult.rows,
      products: productsResult.rows,
    };

    res.status(200).json({
      message: "Shop data retrieved successfully",
      data: shopData,
    });
  } catch (error) {
    console.error("Error fetching shop data:", error);
    res.status(500).json({
      error: "Failed to fetch shop data",
      details: error.message,
    });
  }
});

export default router;
