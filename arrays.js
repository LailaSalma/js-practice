const products = [
  { id: 1, title: "Essence Mascara", price: 9.99, stock: 5 },
  { id: 2, title: "Eyeshadow Palette", price: 19.99, stock: 0 },
  { id: 3, title: "Red Lipstick", price: 12.99, stock: 68 },
  { id: 4, title: "Perfume Oil", price: 40, stock: 0 },
  { id: 5, title: "Nail Polish", price: 8.99, stock: 20 },
];

products.forEach( (p) => {
	console.log(p.title, p.price);
});

const titles = products.map( (p) => p.title );
console.log(titles);

const outOfStock = products.filter( (p) => p.stock === 0 );
console.log(outOfStock.length);

const lipstick = products.find( (p) => p.id === 3 );
console.log(lipstick.title);

const missing = products.find( (p) => p.id === 99 );
console.log(missing);
