CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  item_name TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT false,
  created TIMESTAMPTZ DEFAULT now()
);

DROP TABLE items;

INSERT INTO items (item_name, description) VALUES ('lemons', 'preferably juicy lemons');

INSERT INTO items (description) VALUES ('breaking postgres is fun');

INSERT INTO items (item_name, description) VALUES (12, 17);
-- converting a number into a string: postgres is fine with this
INSERT INTO items (item_name, description, completed) VALUES ('lemons', 'tasty', 'not completed');
-- converting a string into a boolean: absolutely not

INSERT INTO items (item_name, description, completed) VALUES ('dog food', 'crunchy', true);

INSERT INTO items 
  (item_name, description)
VALUES 
  ('Avocados', 'avocado mash'),
  ('Orange juice', 'not just for breakfast'),
  ('Ice Cream', 'Ben & Jerry''s'),
  ('Oil Change', 'stop at dealership'),
  ('Cat Food', null),
  ('Sun Glasses', 'for vacation'),
  ('Dark roast', 'nectar of the gods'),
  ('Running Shoes', null),
  ('Espresso', 'nectar of the gods'),
  ('Merlot', 'for dinner');
 
SELECT * FROM items;

-- limit which columns come back
SELECT id, description AS d FROM items;

-- limit which rows come back
SELECT * FROM items WHERE id = 12;
SELECT * FROM items WHERE id > 11;

SELECT item_name, description, completed FROM items WHERE item_name = 'Espresso';

-- only get so many things back
SELECT * FROM items LIMIT 3;

-- specific order
SELECT * FROM items ORDER BY item_name;

-- specific order AND limit
SELECT * FROM items ORDER BY item_name DESC LIMIT 1;

-- BAD: updating without a WHERE will update every row of the table, everything is coffee now
UPDATE items SET item_name = 'Coffee';
-- GOOD: limiting your updates
UPDATE items SET item_name = 'Coffee' WHERE item_name = 'Espresso';

DELETE FROM items WHERE id = 12;

-- now we are using the products from the very very long sql file
select * from products where aisle = 'Coffee';

SELECT COUNT(DISTINCT aisle) from products;
SELECT COUNT(*) from products;

SELECT * FROM products WHERE aisle = 'tea' AND price > 50 AND price < 50.5;

-- percent signs mean "there can be more string here"
-- the I in ILIKE stands for "case insensitive"
SELECT * FROM products WHERE aisle = 'tea' AND price > 40 AND product_name ILIKE '%herbal%';
SELECT * FROM products WHERE aisle = 'tea' AND price > 40 AND product_name LIKE 'Caffeine%';

SELECT * FROM products WHERE department = 'pets' ORDER BY price DESC;

SELECT COUNT(*) FROM products;
SELECT COUNT(*) AS c, department FROM products GROUP BY department ORDER BY c;

SELECT COUNT(*) FROM products WHERE product_name ILIKE '%canned%' AND aisle NOT LIKE '%canned%';

SELECT ROUND(AVG(price), 2) as cost, department FROM products GROUP BY department ORDER BY cost;
