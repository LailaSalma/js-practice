import chalk from "chalk";
import { fetchAllProducts, totalMatches } from "./api.js"

async function main() { 
	const data = await fetchAllProducts();

	if ( data.status !== 200 ) {
		console.log("Unexpected status:", data.status);
		process.exit(1);
	}
	
	const products = data.body.products;
	const lowStock = products.filter( (p) => p.stock < 10 );
	console.log("status:", data.status);
	console.log("products:", products.length);
	console.log("total:", data.body.total);
	console.log("match:", totalMatches(data.body));
	console.log("low stock (< 10):", lowStock.length);
	lowStock.forEach( (p) => console.log(p.title) );
	
	
	if (totalMatches(data.body)) {
	    console.log(chalk.green("Match"));
	} else {
	    console.log(chalk.red("No Match"));
	}
}

main();
