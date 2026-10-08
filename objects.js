const product = {
  id: 7,
  title: "Mascara",
  price: 9.99,
  tags: ["beauty", "mascara", "eyes"],
  dimensions: { width: 12, height: 4 },
};

console.log(product.title);
console.log(product.price);
console.log(product.tags[1]);
console.log(product.tags.length);
console.log(product.dimensions.height);
console.log(product.brand);
product.brand = "Acme";
console.log(product.brand);
