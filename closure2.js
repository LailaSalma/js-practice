function makeUrlBuilder (baseUrl) {
        return (path) => {
                return baseUrl + path;
        };
}

const dummy = makeUrlBuilder("https://dummyjson.com");
const local = makeUrlBuilder("http://localhost:3000");

console.log(dummy("/products/1"));
console.log(local("/products/1"));
console.log(dummy("/users/1"));
