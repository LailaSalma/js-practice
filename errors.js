const products = [
  { id: 1, title: "Essence Mascara", price: 9.99, review: { rating: 5 } },
  { id: 2, title: "Eyeshadow Palette", price: 19.99 },
];
const goodText = '{"id": 7, "title": "Mascara"}';
const badText = '{"id": 7, "title": "Mascara"';

function describeStatus(code) {
	if ( code >= 200 && code <= 299 ){
		return "success";
	} else if ( code >= 400 && code <= 499 ){
		return "client error";
	}
	return "other";
};

console.log(describeStatus(200));
console.log(describeStatus(404));
console.log(describeStatus(500));

products.forEach( (p) => {
	console.log(p.title);
	console.log(p.review?.rating);
});

function safeParse(text){
	try {
		return JSON.parse(text);
	} catch (error) {
		return null;
	}
};

console.log(safeParse(goodText));
console.log(safeParse(badText));

try {
	console.log(JSON.parse(badText));
} catch (error) {
	console.log(error.name);
}

