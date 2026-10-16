// Predicción antes de ejecutar (escribí el orden completo de los logs):
// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
// Salida observada y explicación:
// 0 cuando se ejecuta el primer then. Las dos cadenas avanzan por la cola de microtareas. Como el primer .then() devuelve una promesa, se necesitan pasos extra para obtener el 4, mientras la otra cadena sigue ejecutándose e imprime 2 y 3. Con return 4, se evitan esos pasos adicionales y cambia el orden de salida. 

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
