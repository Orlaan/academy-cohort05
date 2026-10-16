// Predicción antes de ejecutar (escribí el orden completo de los logs): 
// allSettled ['fulfilled', 'rejected'] -> race B ->  all ['A', 'B', 'C']
//
// Salida observada y explicación:
// Las tres se lanzan al mismo tiempo y cada log sale cuando termina su promesa.
// allSettled termina primero (50 ms): espera a las dos, y el reject es inmediato.
// race termina a los 100 ms con 'B', la más rápida.
// all termina a los 300 ms, cuando llega la más lenta (A), y respeta el orden del array original aunque B haya terminado antes.

const tarda = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

Promise.all([tarda(300, 'A'), tarda(100, 'B'), tarda(200, 'C')])
  .then((valores) => console.log('all', valores));

Promise.race([tarda(300, 'A'), tarda(100, 'B'), tarda(200, 'C')])
  .then((valor) => console.log('race', valor));

Promise.allSettled([tarda(50, 'ok'), Promise.reject('mal')])
  .then((r) => console.log('allSettled', r.map((x) => x.status)));
