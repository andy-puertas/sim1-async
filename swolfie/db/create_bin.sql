INSERT INTO shelfies (shelf, bin, name, price, image)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;