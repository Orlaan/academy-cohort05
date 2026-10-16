// Predicción antes de ejecutar (escribí el orden completo de los logs):
// 1 -> 5 -> 6 -> 2 
// Salida observada y explicación:
// ...

const p = new Promise((resolve, reject) => {
  console.log('1');
  resolve('2');
  reject('3');
  resolve('4');
  console.log('5');
});

p.then((v) => console.log(v)).catch((e) => console.log(e));

console.log('6');
