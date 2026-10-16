// Predicción antes de ejecutar (escribí el orden completo de los logs):
// A1 -> B1 -> A2 -> B2 -> A3 -> B3
// Salida observada y explicación:
// ...

Promise.resolve()
  .then(() => console.log('A1'))
  .then(() => console.log('A2'))
  .then(() => console.log('A3'));

Promise.resolve()
  .then(() => console.log('B1'))
  .then(() => console.log('B2'))
  .then(() => console.log('B3'));
