interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand?: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface ApiResult {
  status: number;
  body: ProductsResponse;
}
		      
async function fetchProducts () :Promise<ApiResult> {
	const response = await fetch("https://dummyjson.com/products/1");
	const status = response.status;
	const body: ProductsResponse = await response.json();
	return { status, body};
}

async function main() {
	const result = await fetchProducts();
	
	console.log("Status:", result.status);
	result.body.products.forEach( (p) => console.log(p.title) );
}

main();
