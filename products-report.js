const responseText = `{
  "products": [
    { "id": 1, "title": "Essence Mascara", "price": 9.99, "stock": 5, "category": "beauty", "rating": 4.9 },
    { "id": 2, "title": "Eyeshadow Palette", "price": 19.99, "stock": 0, "category": "beauty", "rating": 3.2 },
    { "id": 3, "title": "Red Lipstick", "price": 12.99, "stock": 68, "category": "beauty", "rating": 4.1 },
    { "id": 4, "title": "Perfume Oil", "price": 40, "stock": 0, "category": "fragrances", "rating": 4.4 },
    { "id": 5, "title": "Nail Polish", "price": -8.99, "stock": 20, "category": "beauty", "rating": 4.7 },
    { "id": 6, "title": "Body Lotion", "stock": 12, "category": "skin-care", "rating": 3.8 }
  ],
  "total": 6,
  "skip": 0,
  "limit": 6
}`;

function parseResponse(text) {
	try {
		return JSON.parse(text);
	} catch (error){
		return null;
	}
}

function findOutOfStock(products) {
	const titles = products.filter( (p) => p.stock === 0 ).map ( (t) => t.title );
	return titles;
}

function findInvalidPrices(products) {
	const invalidPrices = products.filter( (p) => (p.price < 0) || (typeof p.price !== "number") );
	return invalidPrices;
}

function countByCategory(products) {
	const counts = {};
	products.forEach( (p) => {
		counts[p.category] = (counts[p.category] || 0) + 1;
	});
	return counts;
}

function checkTotal(data) {
	return data.total === data.products.length;
}


const data = parseResponse(responseText);
if ( data === null ) {
	console.log("Invalid JSON");
	process.exit(1);
} else {
	console.log("Out of stock:", findOutOfStock(data.products));
	console.log("Invalid Prices:", findInvalidPrices(data.products));
	console.log("Categories count:", countByCategory(data.products));
	console.log("Total items:", checkTotal(data));
}

