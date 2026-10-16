// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
// Salida observada y explicación:
// ...

// Nivel senior: devolver una promesa adentro de un .then cuesta pasos extra.

Promise.resolve()
  .then(() => {
    console.log(0);
    return Promise.resolve(4);
  })
  .then((n) => console.log(n));

Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(5))
  .then(() => console.log(6));
