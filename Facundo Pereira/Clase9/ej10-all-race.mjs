// Predicción antes de ejecutar (escribí el orden completo de los logs):
// allSettled ['fullfilled', 'rejected'] -> race B -> all [A,B,C]
// Salida observada y explicación:
// 1. allSettled se imprime primero porque la promesa se resuelve a los 50ms. Devuelve el estado
// de cada promesa. La primera se cumple, la segunda se rechaza.
// 2. race: se imprime B porque es la promesa que termina primero.
// 3. all: se imprime al final a los 300ms, cuando todas las promesas terminan. Con el Promise.all
// se conserva el orden original de las promesas

const tarda = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

Promise.all([tarda(300, 'A'), tarda(100, 'B'), tarda(200, 'C')])
  .then((valores) => console.log('all', valores));

Promise.race([tarda(300, 'A'), tarda(100, 'B'), tarda(200, 'C')])
  .then((valor) => console.log('race', valor));

Promise.allSettled([tarda(50, 'ok'), Promise.reject('mal')])
  .then((r) => console.log('allSettled', r.map((x) => x.status)));
