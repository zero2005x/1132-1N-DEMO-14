import express from 'express';
const router = express.Router();

import db from '../utils/database.js';

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select * from shop_14`);
    // console.log('results', JSON.stringify(results.rows));
    res.render('shop_14/womens', {
      data: results.rows,
      title: 'Womens -- From PostgreSQL Server',
      name: 'LTLin',
      id: '913410014',
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
