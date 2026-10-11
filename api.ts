const baseUrl = process.env.BASE_URL || "https://dummyjson.com";

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ApiResult {
  status: number;
  body: ProductsResponse;
}

export async function fetchAllProducts() :Promise<ApiResult> {
	const response = await fetch(`${baseUrl}/products?limit=0`);
	const status = response.status;
	const body: ProductsResponse = await response.json();
	return { status, body };
}

export function totalMatches(body: ProductsResponse) : boolean {
	return body.total === body.products.length;
}
