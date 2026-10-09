let result = "no data yet";
console.log("A: before call");
setTimeout(() => {
  result = "data arrived";
  console.log("B: inside callback, result =", result);
}, 500);
console.log("C: after call, result =", result);
