const text = '{"id": 7, "title": "Mascara", "price": 9.99, "tags": ["beauty", "eyes"], "reviews": [{"rating": 5, "user": "anna"}, {"rating": 2, "user": "tom"}]}';

console.log(typeof text);

const product = JSON.parse(text);
console.log(typeof product);

console.log(product.reviews[1].user);

const lowRatings = product.reviews.filter( (r) => r.rating < 3 );
console.log(lowRatings.length);

const updated = {...product, price: 0};
console.log(JSON.stringify(updated, null, 2));
