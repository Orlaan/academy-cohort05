// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
// Salida observada y explicación:
// ...

Promise.resolve(1)
  .then((n) => {
    console.log('A', n);
    throw new Error('boom');
  })
  .then((n) => console.log('B', n))
  .catch((e) => {
    console.log('C', e.message);
    return 10;
  })
  .then((n) => console.log('D', n + 1));
