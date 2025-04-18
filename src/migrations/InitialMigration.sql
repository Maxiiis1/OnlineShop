CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT
);

CREATE TABLE customer (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  role VARCHAR DEFAULT 'user'
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  price DECIMAL NOT NULL,
  categoryId INT,
  description TEXT,
  mainImage TEXT,
  images TEXT[],
  CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES category(id)
);

CREATE TABLE "order" (
  id SERIAL PRIMARY KEY,
  customerId INT,
  total_price DECIMAL NOT NULL,
  status VARCHAR DEFAULT 'new',
  shipping_address VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_customer FOREIGN KEY (customerId) REFERENCES customer(id)
);

CREATE TABLE order_item (
  id SERIAL PRIMARY KEY,
  orderId INT,
  productId INT,
  quantity INT NOT NULL,
  price DECIMAL NOT NULL,
  CONSTRAINT fk_order FOREIGN KEY (orderId) REFERENCES "order"(id),
  CONSTRAINT fk_product FOREIGN KEY (productId) REFERENCES product(id)
);

CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  productId INT,
  customerId INT,
  rating DECIMAL NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_review_product FOREIGN KEY (productId) REFERENCES product(id),
  CONSTRAINT fk_review_customer FOREIGN KEY (customerId) REFERENCES customer(id)
);

CREATE TABLE payment (
  id SERIAL PRIMARY KEY,
  orderId INT,
  payment_method VARCHAR NOT NULL,
  payment_status VARCHAR DEFAULT 'pending',
  amount DECIMAL NOT NULL,
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_payment_order FOREIGN KEY (orderId) REFERENCES "order"(id)
);
