const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

delay(200, 5).then( (n) => {
	n = n+10;
	console.log("step 1:", n);
	return n;
}).then((n) => { return delay(200, 30); 
}).then( (n) => {
	console.log("step 2:", n);
	throw new Error("boom");
}).catch((err) => console.log("caught:", err.message));

console.log("sync line");
