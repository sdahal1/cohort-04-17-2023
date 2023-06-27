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
 