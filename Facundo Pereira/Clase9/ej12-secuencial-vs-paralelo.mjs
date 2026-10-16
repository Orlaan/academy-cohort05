// Predicción antes de ejecutar (escribí el orden completo de los logs):
// paralelo 200ms -> secuencial 400ms
// Salida observada y explicación:
// Paralelo() ejecuta ambas promesas al mismo tiempo con Promise.all(), por lo que tarda aproximadamente 200 ms. En cambio, secuencial() espera a que termine la primera operación para iniciar la segunda, tardando unos 400 ms en total.

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
