console.log(typeof null); // "object"
console.log(typeof []); // "object"
console.log([] === []); // false
console.log(0.1 + 0.2 === 0.3); // false
console.log([1, 2, 3] + [1, 2]); // false

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
