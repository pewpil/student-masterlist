CREATE TABLE IF NOT EXISTS classes (
  id SERIAL PRIMARY KEY,
  owner_id SERIAL,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(255),
  FOREIGN KEY (owner_id) REFERENCES users (id)
);
