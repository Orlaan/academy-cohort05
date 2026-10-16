// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
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
