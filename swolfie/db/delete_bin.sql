UPDATE swolfinal
SET name = null,
price = null,
image = null
WHERE id = $1
RETURNING *