CREATE TABLE menu_14 (
  mid INT NOT NULL PRIMARY KEY,
  title varchar(255),
  price real,
  category varchar(255),
  local_img text,
  remote_img text,
  description text,
);


INSERT INTO menu_14 (mid, title, category, price, local_img, remote_img, description) VALUES
(1, 'buttermilk pancakes', 'breakfast', 15.99, './images/item-1.jpeg', '', 'I''m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'),
(2, 'diner double', 'lunch', 13.99, './images/item-2.jpeg','', 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'),
(3, 'godzilla milkshake', 'shakes', 6.99, './images/item-3.jpeg','', 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.'),
(4, 'country delight', 'breakfast', 20.99, './images/item-4.jpeg', '','Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,'),
(5, 'egg attack', 'lunch', 22.99, './images/item-5.jpeg', '','franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90''s pop-up'),
(6, 'oreo dream', 'shakes', 18.99, './images/item-6.jpeg', '','Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'),
(7, 'bacon overflow', 'breakfast', 8.99, './images/item-7.jpeg', '','carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird'),
(8, 'american classic', 'lunch', 12.99, './images/item-8.jpeg', '','on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'),
(9, 'quarantine buddy', 'shakes', 16.99, './images/item-9.jpeg', '','skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'),
(10, 'bison steak', 'dinner', 22.99, './images/item-10.jpeg', '','skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.');
