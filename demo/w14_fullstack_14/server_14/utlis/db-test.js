import db from "./database.js";

const testDB = async () => {
  try {
    const results = await db.query("SELECT * FROM product_14");
    console.log("results", JSON.stringify(results.rows));
  } catch (error) {
    console.error("Error testing the database connection", error);
  }
};

testDB();

export default testDB;
