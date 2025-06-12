import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import apiProductRouter from './routes/api/apiProductRouter_14.js';
import ProductRouter from './routes/ProductRouter_14.js';
import apiShopRouter from './routes/api/apiShopRouter_14.js';
import ShopRouter from './routes/ShopRouter_14.js';
import MenuRouter from './routes/MenuRouter_14.js';
import apiMenuRouter from './routes/api/apiMenuRouter_14.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app_14 = express();

app_14.use(cors());
app_14.use(logger('dev'));
app_14.use(express.static('public'));

// 添加客戶端靜態文件服務
app_14.use(
  '/menu',
  express.static(path.join(__dirname, '../final_client_14/menu'))
);

app_14.use(
  '/shop',
  express.static(path.join(__dirname, '../final_client_14/shop'))
);

app_14.use(
  '/product',
  express.static(path.join(__dirname, '../final_client_14/product'))
);

app_14.set('view engine', 'ejs');

// menu routes
app_14.use('/api/menu_14', apiMenuRouter);

app_14.use('/menu_14/static', (req, res, next) => {
  res.render('menu_14/menu_static', {
    title: 'Our Menu - Static',
    name: 'LTLin',
    id: '913410014',
  });
});

// menu routes
app_14.use('/menu_14', MenuRouter);

// shop routes
app_14.use('/api/shop_14', apiShopRouter);
app_14.use('/shop_14', ShopRouter);
app_14.use('/shop_14/static', (req, res, next) => {
  res.render('shop_14/womens_static', {
    title: 'Womens -- Static Page',
    name: 'LTLin',
    id: '913410014',
  });
});

// product routes
app_14.use('/api/product_14', apiProductRouter);
app_14.use('/product_14', ProductRouter);
app_14.use('/product_14/static', (req, res, next) => {
  res.render('product_14/static_14', {
    title: 'Get Products - Static',
    name: 'LTLin',
    id: '913410014',
  });
});

// blog routes
app_14.use('/blog_14/static', (req, res, next) => {
  res.render('blog_14/static_14', {
    title: 'Get Blogs - Static',
    name: 'LTLin',
    id: '913410014',
  });
});

app_14.use('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    name: 'LTLin',
    id: '913410014',
  });
});

const port = process.env.PORT || 5000;

app_14.listen(port, () => {
  console.log(`Connecting ${process.env.DATABASE} server on port: ${port}`);
});
