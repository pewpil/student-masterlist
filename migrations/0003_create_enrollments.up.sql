CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  user_id SERIAL,
  class_id SERIAL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (class_id) REFERENCES classes (id)
  );

