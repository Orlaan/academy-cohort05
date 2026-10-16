// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
// Salida observada y explicación:
// ...

const tarda = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

async function secuencial() {
  const inicio = Date.now();
  await tarda(200, 'a');
  await tarda(200, 'b');
  console.log('secuencial', Math.round((Date.now() - inicio) / 100) * 100, 'ms');
}

async function paralelo() {
  const inicio = Date.now();
  await Promise.all([tarda(200, 'a'), tarda(200, 'b')]);
  console.log('paralelo', Math.round((Date.now() - inicio) / 100) * 100, 'ms');
}

secuencial();
paralelo();

// Predecí el orden Y los milisegundos aproximados de cada línea.
