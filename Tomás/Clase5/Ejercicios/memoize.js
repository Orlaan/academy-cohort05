// memoize(fn): guarda en un Map el resultado por argumento y no recalcula lo ya calculado.
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const clave = args.length === 1 ? args[0] : JSON.stringify(args);

    if (cache.has(clave)) return cache.get(clave);

    const resultado = fn.apply(this, args);
    cache.set(clave, resultado);
    return resultado;
  };
}

// Caso 1: fibonacci memoizado (la recursión también pasa por la caché)
let llamadasFib = 0;
const fib = memoize((n) => {
  llamadasFib++;
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
});
const f40 = fib(40);
console.log("fib(40):", f40);                 // fib(40): 102334155
console.log("llamadasFib:", llamadasFib);     // llamadasFib: 41
console.assert(f40 === 102334155, "memoize: fib(40) debería ser 102334155");
console.assert(llamadasFib === 41, "memoize: fib(40) debería calcular cada n una sola vez (41 llamadas)");

// Caso 2: una segunda llamada con el mismo argumento no recalcula
const antes = llamadasFib;
const f40otraVez = fib(40);
console.log("fib(40) otra vez:", f40otraVez);             // fib(40) otra vez: 102334155
console.log("llamadas nuevas:", llamadasFib - antes);     // llamadas nuevas: 0
console.assert(f40otraVez === 102334155, "memoize: debería devolver el mismo resultado");
console.assert(llamadasFib === antes, "memoize: no debería recalcular un valor ya guardado");

// Caso 3: varios argumentos
let llamadasPot = 0;
const potencia = memoize((base, exp) => { llamadasPot++; return base ** exp; });
const p1 = potencia(2, 10);
const p2 = potencia(2, 10);
const p3 = potencia(10, 2);
console.log("p1:", p1, "| p2:", p2, "| p3:", p3);   // p1: 1024 | p2: 1024 | p3: 100
console.log("llamadasPot:", llamadasPot);           // llamadasPot: 2
console.assert(p1 === 1024 && p2 === 1024, "memoize: 2^10 debería ser 1024");
console.assert(p3 === 100, "memoize: (10, 2) es una clave distinta de (2, 10)");
console.assert(llamadasPot === 2, "memoize: (2, 10) se calcula una vez y (10, 2) otra");

module.exports = memoize;