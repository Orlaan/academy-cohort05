// Predicción antes de ejecutar (escribí el orden completo de los logs):
// paralelo 200 ms - secuencial 400 ms

// Salida observada y explicación:
// En secuencial, el segundo tarda() recién se crea cuando terminó el primero (el await frena la función), así que son 200 + 200 = 400 ms.
// En paralelo, los dos tarda() se crean juntos al armar el array y Promise.all espera a ambos: corren al mismo tiempo, así que son 200 ms. Por eso paralelo imprime primero aunque se llame después.

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