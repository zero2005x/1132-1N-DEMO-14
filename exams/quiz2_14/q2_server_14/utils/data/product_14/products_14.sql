CREATE TABLE product_14 (
  id INT NOT NULL PRIMARY KEY,
  title varchar(255),
  price real,
  category varchar(255),
  img text,
  remote_img text
);

INSERT INTO product_14 (id, title, price, category, img, remote_img)
VALUES
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-1.jpg'),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-2.jpg'),
(3, 'High-Back Bench', 9.99, 'Ikea', './images/product-3.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-3.jpg'),
(4, 'Wooden Table', 19.99, 'Ikea', './images/product-4.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-4.jpg'),
(5, 'Dining Table', 69.99, 'Caressa', './images/product-5.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-5.jpg'),
(6, 'Entertainmint Center', 25.99, 'Liddy', './images/product-6.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-6.jpg'),
(7, 'Albany Sectional', 10.99, 'Ikea', './images/product-7.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-7.jpg'),
(8, 'Sofa Set', 69.99, 'Liddy', './images/product-8.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-8.jpg'),
(9, 'Utopia Sofa', 69.99, 'Liddy', './images/product-9.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-9.jpg'),
(10, 'Modern Bookshelf', 8.99, 'Marcos', './images/product-10.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-10.jpg'),
(11, 'Albany Table', 79.99, 'Marcos', './images/product-11.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-11.jpg'),
(12, 'Leather Sofa', 39.95, 'Liddy', './images/product-12.jpg', 'https://loxlxwyirrqkjrruqboq.supabase.co/storage/v1/object/public/Liang-Ting Lin-1n-xx/product_14/product-12.jpg')

DROP TABLE product_14