import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const router = express.Router();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'final_js_14',
  password: '0000', // Replace with your actual password
  port: 5432,
});

router.get('/', async (req, res) => {
  try {
    // Query to get 4 items based on student ID ending digit 4
    // D=4,9 => breakfast(4,7), dessert(9,3)
    const query =
      'SELECT * FROM menu_14 WHERE mid IN (4, 7, 9, 3) ORDER BY mid';
    const result = await pool.query(query);

    res.render('menu_14/menu_14', {
      title: 'Our Menu - Database',
      name: 'LTLin',
      id: '913410014',
      menuItems: result.rows,
    });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Database error');
  }
});

export default router;
