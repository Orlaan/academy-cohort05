// Predicción antes de ejecutar (escribí el orden completo de los logs):
// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Salida observada y explicación:
// 0 1 2 3 4 5 6.
// Los .then de las dos cadenas se intercalan en la cola de microtareas:
// un paso de cada una por vez. Como el primer .then devuelve una promesa
// (Promise.resolve(4)) y no un valor, JavaScript necesita dos microtareas
// extra para sacarle el 4 y resolver la promesa del .then. Mientras tanto,
// la segunda cadena avanza e imprime 2 y 3. Recién después el segundo
// .then de la primera cadena recibe el 4.
// Con "return 4" la salida sería 0 1 4 2 3 5 6.

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