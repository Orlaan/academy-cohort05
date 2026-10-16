// Predicción antes de ejecutar (escribí el orden completo de los logs):
// 3 -> 1 -> 4 -> 2
// Salida observada y explicación:
// ...

async function tarea() {
  console.log('1');
  await null;
  console.log('2');
}

console.log('3');
tarea();
console.log('4');
