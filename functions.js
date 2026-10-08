function isSuccess (code) {
	if (code >= 200 && code <= 299){
		return true;
	}
	else
		return false;
}

console.log(isSuccess(200));
console.log(isSuccess(404));
console.log(isSuccess(299));

const isClientError = (code) => (code >= 400 && code <= 499);

console.log(isClientError(404));
console.log(isClientError(500));
console.log(isClientError(400));
