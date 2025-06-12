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
(1, 'Emperor Bed', 21.99, 'Liddy', './images/product-1.jpg', ''),
(2, 'Accent Chair', 25.99, 'Caressa', './images/product-2.jpg', ''),
(3, 'High-Back Bench', 9.99, 'Ikea', './images/product-3.jpg', '')