import db from './database.js';

const testDB = async () => {
  try {
    const results = await db.query(`select * from product_14`);
    console.log('results', JSON.stringify(results.rows));
  } catch (error) {
    console.log(error);
  }
};

testDB();

export default testDB;
