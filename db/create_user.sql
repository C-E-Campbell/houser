INSERT INTO users (email, user_password, isadmin)
VALUES ($1, $2, FALSE)
RETURNING *;
