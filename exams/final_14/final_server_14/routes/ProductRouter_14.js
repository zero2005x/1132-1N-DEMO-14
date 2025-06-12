import express from 'express';
const router = express.Router();

import db from '../utils/database.js';

router.get('/', async (req, res, next) => {
  try {
    const results = await db.query(`select * from product_14`);
    // console.log('results', JSON.stringify(results.rows));
    res.render('product_14/index', {
      data: results.rows,
      title: 'Get Products From PostgreSQL Server',
      name: 'LTLin',
      id: '913410014',
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
