CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img text(100000),
    mortgage decimal,
    rent decimal
    );

INSERT INTO houses(name, address, city, state, zip, img, mortgage, rent)
VALUES
('new house', '123 redux ave', 'jax', 'FL', 32221, https://i.pinimg.com/originals/ff/0a/fc/ff0afc3d1f4db233f4ddac1e9d079f5b.jpg, 33.3, 2);


CREATE TABLE users
(
id SERIAL PRIMARY KEY,
email VARCHAR(200),
user_password TEXT,
isAdmin BOOLEAN NOT NULL
)

INSERT INTO users(email, user_password, isAdmin)
VALUES
('admin', 'admin', TRUE);
('user', 'user', FALSE);

