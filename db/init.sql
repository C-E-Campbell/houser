CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    img TEXT,
    mortgage decimal,
    rent decimal
    );

INSERT INTO houses(name, address, city, state, img, mortgage, rent)
VALUES
('new house', '123 redux ave', 'jax', 'FL', 'fakeImg', 33.3, 2);
