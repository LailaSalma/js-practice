const baseUrl = process.env.BASE_URL || "https://dummyjson.com";

export async function fetchAllProducts() {
	const response = await fetch(`${baseUrl}/products?limit=0`);
	const status = response.status;
	const body = await response.json();
	return { status, body };
}

export function totalMatches(body) {
	return body.total === body.products.length;
}
