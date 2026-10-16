// Predicción antes de ejecutar (escribí el orden completo de los logs):
// fin -> 1 -> 2 -> 3
// Salida observada y explicación:
// ...

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  [3, 1, 2].forEach(async (n) => {
    await esperar(n * 100);
    console.log(n);
  });
  console.log('fin');
}

main();

// Pregunta extra: ¿cómo lo cambiarías para que imprima 3, 1, 2 y recién después 'fin'?
// Respuesta: reemplazar el forEach por un for-of, que respeta el orden de ejecución y espera a que cada promesa se resuelva antes de continuar con la siguiente iteración.

async function main2() {
  for (const n of [3, 1, 2]) {
    await esperar(n * 100);
    console.log(n);
  }
  console.log('fin');
}

main2();