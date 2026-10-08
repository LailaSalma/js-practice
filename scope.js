const baseUrl = "https://dummyjson.com";

function buildUrl(path) {
    const full = baseUrl + path;
    return full;
}

function demo() {
    const baseUrl = "http://localhost:3000";
    return baseUrl + "/x";
}

console.log(buildUrl("/products/1"));
console.log(demo());
console.log(baseUrl);
console.log(full);
