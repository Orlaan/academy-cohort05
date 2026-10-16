// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
// Salida observada y explicación:
// ...

const tarda = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

Promise.all([tarda(300, 'A'), tarda(100, 'B'), tarda(200, 'C')])
  .then((valores) => console.log('all', valores));

Promise.race([tarda(300, 'A'), tarda(100, 'B'), tarda(200, 'C')])
  .then((valor) => console.log('race', valor));

Promise.allSettled([tarda(50, 'ok'), Promise.reject('mal')])
  .then((r) => console.log('allSettled', r.map((x) => x.status)));
