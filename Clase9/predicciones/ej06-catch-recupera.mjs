// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
// Salida observada y explicación:
// ...

Promise.reject(new Error('falla'))
  .then(() => console.log('A'))
  .catch((e) => {
    console.log('B', e.message);
    return 'recuperado';
  })
  .then((v) => console.log('C', v))
  .finally(() => console.log('D'))
  .then((v) => console.log('E', v));
