function countSuccess (codes: number[]): number {
	return codes.filter( (code) => code >= 200 && code <= 299 ).length;
}

console.log(countSuccess([200, 404, 201, 500]));
console.log(countSuccess([200, 404]));
