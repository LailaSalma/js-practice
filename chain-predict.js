const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

delay(100, 1)
  .then((n) => n + 1)
  .then((n) => { n + 1; })
  .then((n) => console.log("A:", n));

delay(100, 1)
  .then((n) => { return delay(100, n + 10); })
  .then((n) => console.log("B:", n));
