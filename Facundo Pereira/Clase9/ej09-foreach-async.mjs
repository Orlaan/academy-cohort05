// Predicción antes de ejecutar (escribí el orden completo de los logs):
// fin -> 1 -> 2 -> 3
// Salida observada y explicación:
// ...
/*const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  [3, 1, 2].forEach(async (n) => {
    await esperar(n * 100);
    console.log(n);
  });
  console.log('fin');
}

main();
*/
// Pregunta extra: ¿cómo lo cambiarías para que imprima 3, 1, 2 y recién después 'fin'?
// Esperaria a que terminen las operaciones y despues  imprimiria los numeros en orden
const esperar2 = (ms)=> new Promise((resolve) => setTimeout(resolve,ms));

async function main2() {
  await Promise.all(
    [3, 1, 2].map((n) => esperar2(n * 100))
  );

  console.log(3);
  console.log(1);
  console.log(2);
  console.log('fin');
}

main2();