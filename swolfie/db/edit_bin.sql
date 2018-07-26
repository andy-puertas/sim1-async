UPDATE shelfies
SET name = $1, price = $2, img = $3
WHERE shelf = $4 
AND bin = $5
RETURNING *;