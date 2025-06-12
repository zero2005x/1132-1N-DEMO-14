CREATE DATABASE js_quiz2_14;

DROP TABLE shop_14;
TRUNCATE TABLE shop_14;

CREATE TABLE shop_14 (
    pId int NOT NULL PRIMARY KEY,
    title varchar(255),
    category_id int,
    price real,
    local_img text,
    remote_img text
);

INSERT INTO shop_14 (pId, title, category_id, price, local_img, remote_img)
VALUES
(1,'Blue Tanktop',4,25,'/shop/img/womens/blue-tank.png','https://i.ibb.co/7CQVJNm/blue-tank.png'),
(2,'Floral Blouse',4,20,'/shop/img/womens/floral-blouse.png','https://i.ibb.co/4W2DGKm/floral-blouse.png'),
(3,'Floral Dress',4,80,'/shop/img/womens/floral-skirt.png','https://i.ibb.co/KV18Ysr/floral-skirt.png'),
(4,'Red Dots Dress',4,80,'/shop/img/womens/red-polka-dot-dress.png','https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'),
(5,'Stripped Sweater',4,45,'/shop/img/womens/striped-sweater.png', 'https://i.ibb.co/KmSkMbH/striped-sweater.png'),
(6,'Yellow Track Suite',4,135,'/shop/img/womens/yellow-track-suit.png','https://i.ibb.co/v1cvwNf/yellow-track-suit.png'),
(7,'White Blouse',4,20,'/shop/img/womens/white-vest.png','https://i.ibb.co/qBcrsJg/white-vest.png')


INSERT INTO shop_14 (pId, title, category_id, price, local_img, remote_img)
VALUES
(5,'Brown Brim',1,25,'/img/hats/brown-brim.png'),
(6,'Blue Beanie',1,18,'/img/hats/blue-beanie.png'),
(7,'Brown Cowboy',1,35,'/img/hats/brown-cowboy.png'),
(8,'Grey Brim',1,25,'/img/hats/grey-brim.png')