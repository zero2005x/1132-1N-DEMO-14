-- 刪除已存在的表格（如果存在）
DROP TABLE IF EXISTS shop_14_hats;
DROP TABLE IF EXISTS shop_14_jackets;
DROP TABLE IF EXISTS shop_14_sneakers;
DROP TABLE IF EXISTS shop_14_womens;
DROP TABLE IF EXISTS shop_14_mens;

-- 創建 hats 表格
CREATE TABLE shop_14_hats (
    pId INTEGER PRIMARY KEY,
    title VARCHAR(255),
    category_id INTEGER,
    price REAL,
    local_img TEXT,
    remote_img TEXT
);

-- 插入 hats 數據
INSERT INTO shop_14_hats (pId, title, category_id, price, local_img, remote_img) VALUES
(1, 'Brown Brim', 1, 25, '/shop/img/hats/brown-brim.png', 'https://i.ibb.co/ZYW3VTp/brown-brim.png'),
(2, 'Blue Beanie', 1, 18, '/shop/img/hats/blue-beanie.png', 'https://i.ibb.co/ypkgK0X/blue-beanie.png'),
(3, 'Brown Cowboy', 1, 35, '/shop/img/hats/brown-cowboy.png', 'https://i.ibb.co/QdJwgmp/brown-cowboy.png'),
(4, 'Grey Brim', 1, 25, '/shop/img/hats/grey-brim.png', 'https://i.ibb.co/RjBLWxB/grey-brim.png'),
(5, 'Green Beanie', 1, 18, '/shop/img/hats/green-beanie.png', 'https://i.ibb.co/YTjW3vF/green-beanie.png'),
(6, 'Palm Tree', 1, 14, '/shop/img/hats/palm-tree-cap.png', 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png'),
(7, 'Red Beanie', 1, 18, '/shop/img/hats/red-beanie.png', 'https://i.ibb.co/bLB646Z/red-beanie.png'),
(8, 'Wolf Cap', 1, 14, '/shop/img/hats/wolf-cap.png', 'https://i.ibb.co/1f2nWMM/wolf-cap.png'),
(9, 'Blue Snapback', 1, 16, '/shop/img/hats/blue-snapback.png', 'https://i.ibb.co/X2VJP2W/blue-snapback.png');

-- 創建 jackets 表格
CREATE TABLE shop_14_jackets (
    pId INTEGER PRIMARY KEY,
    title VARCHAR(255),
    category_id INTEGER,
    price REAL,
    local_img TEXT,
    remote_img TEXT
);

-- 插入 jackets 數據
INSERT INTO shop_14_jackets (pId, title, category_id, price, local_img, remote_img) VALUES
(1, 'Black Jean Shearling', 2, 125, '/shop/img/jackets/black-shearling.png', 'https://i.ibb.co/XzcwL5s/black-shearling.png'),
(2, 'Blue Jean Jacket', 2, 90, '/shop/img/jackets/blue-jean-jacket.png', 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'),
(3, 'Grey Jean Jacket', 2, 90, '/shop/img/jackets/grey-jean-jacket.png', 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png'),
(4, 'Brown Shearling', 2, 165, '/shop/img/jackets/brown-shearling.png', 'https://i.ibb.co/s96FpdP/brown-shearling.png'),
(5, 'Tan Trench', 2, 185, '/shop/img/jackets/brown-trench.png', 'https://i.ibb.co/M6hHc3F/brown-trench.png');

-- 創建 sneakers 表格
CREATE TABLE shop_14_sneakers (
    pId INTEGER PRIMARY KEY,
    title VARCHAR(255),
    category_id INTEGER,
    price REAL,
    local_img TEXT,
    remote_img TEXT
);

-- 插入 sneakers 數據
INSERT INTO shop_14_sneakers (pId, title, category_id, price, local_img, remote_img) VALUES
(1, 'Adidas NMD', 3, 220, '/shop/img/sneakers/adidas-nmd.png', 'https://i.ibb.co/dJbG1cT/adidas-nmd.png'),
(2, 'Adidas Yeezy', 3, 280, '/shop/img/sneakers/yeezy.png', 'https://i.ibb.co/dJbG1cT/yeezy.png'),
(3, 'Black Converse', 3, 110, '/shop/img/sneakers/black-converse.png', 'https://i.ibb.co/bPmVXyP/black-converse.png'),
(4, 'Nike White AirForce', 3, 160, '/shop/img/sneakers/white-nike-high-tops.png', 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png'),
(5, 'Nike Red High Tops', 3, 160, '/shop/img/sneakers/nikes-red.png', 'https://i.ibb.co/QcvzydB/nikes-red.png'),
(6, 'Nike Brown High Tops', 3, 160, '/shop/img/sneakers/nike-brown.png', 'https://i.ibb.co/fMTV342/nike-brown.png'),
(7, 'Air Jordan Limited', 3, 190, '/shop/img/sneakers/nike-funky.png', 'https://i.ibb.co/W2js6DB/nike-funky.png'),
(8, 'Timberlands', 3, 200, '/shop/img/sneakers/timberlands.png', 'https://i.ibb.co/Mhh6wBg/timberlands.png');

-- 創建 womens 表格
CREATE TABLE shop_14_womens (
    pId INTEGER PRIMARY KEY,
    title VARCHAR(255),
    category_id INTEGER,
    price REAL,
    local_img TEXT,
    remote_img TEXT
);

-- 插入 womens 數據
INSERT INTO shop_14_womens (pId, title, category_id, price, local_img, remote_img) VALUES
(1, 'Blue Tanktop', 4, 25, '/shop/img/womens/blue-tank.png', 'https://i.ibb.co/7CQVJNm/blue-tank.png'),
(2, 'Floral Blouse', 4, 20, '/shop/img/womens/floral-blouse.png', 'https://i.ibb.co/4W2DGKm/floral-blouse.png'),
(3, 'Floral Dress', 4, 80, '/shop/img/womens/floral-skirt.png', 'https://i.ibb.co/KV18Ysr/floral-skirt.png'),
(4, 'Red Dots Dress', 4, 80, '/shop/img/womens/red-polka-dot-dress.png', 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'),
(5, 'Striped Sweater', 4, 45, '/shop/img/womens/striped-sweater.png', 'https://i.ibb.co/KmSkMbH/striped-sweater.png'),
(6, 'Yellow Track Suit', 4, 135, '/shop/img/womens/yellow-track-suit.png', 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png'),
(7, 'White Blouse', 4, 20, '/shop/img/womens/white-vest.png', 'https://i.ibb.co/qBcrsJg/white-vest.png');

-- 創建 mens 表格
CREATE TABLE shop_14_mens (
    pId INTEGER PRIMARY KEY,
    title VARCHAR(255),
    category_id INTEGER,
    price REAL,
    local_img TEXT,
    remote_img TEXT
);

-- 插入 mens 數據
INSERT INTO shop_14_mens (pId, title, category_id, price, local_img, remote_img) VALUES
(1, 'Camo Down Vest', 5, 325, '/shop/img/mens/camo-vest.png', 'https://i.ibb.co/xJS0T3Y/camo-vest.png'),
(2, 'Floral T-shirt', 5, 20, '/shop/img/mens/floral-shirt.png', 'https://i.ibb.co/qMQ75QZ/floral-shirt.png'),
(3, 'Black & White Longsleeve', 5, 25, '/shop/img/mens/long-sleeve.png', 'https://i.ibb.co/55z32tw/long-sleeve.png'),
(4, 'Pink T-shirt', 5, 25, '/shop/img/mens/pink-shirt.png', 'https://i.ibb.co/RvwnBL8/pink-shirt.png'),
(5, 'Jean Long Sleeve', 5, 40, '/shop/img/mens/polka-dot-shirt.png', 'https://i.ibb.co/55z32tw/polka-dot-shirt.png'),
(6, 'Burgundy T-shirt', 5, 25, '/shop/img/mens/roll-up-jean-shirt.png', 'https://i.ibb.co/55z32tw/roll-up-jean-shirt.png');