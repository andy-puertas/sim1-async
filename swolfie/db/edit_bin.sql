UPDATE swolfinal
SET name = $1, price = $2
WHERE id = $3
RETURNING *;