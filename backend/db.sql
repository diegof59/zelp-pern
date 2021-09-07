CREATE TABLE restaurant(
  restaurant_id SERIAL PRIMARY KEY
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT CHECK(price_range > 0 AND price_range < 6)
);