const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

async function main() {
	try {
		const a = await delay(200, 5);
		console.log("step 1:", a+10);
		const b = await delay(200, 30);
		console.log("step 2:", b);
		throw new Error("boom");
	} catch (error) {
		console.log("caught", error.message);
	}
}

main();
console.log("sync line");
