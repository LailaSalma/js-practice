async function getProduct(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const status = response.status;
        const body = await response.json();
        return {status, body};
}
async function main() { 
	const first = await getProduct(1);
	console.log("The response body:", JSON.stringify(first.body, null, 2));
	console.log("The response status is:", first.status);

	const second = await getProduct(9999);
	console.log("The response body:", JSON.stringify(second.body, null, 2));
	console.log("The response status is:", second.status);
}

main();
