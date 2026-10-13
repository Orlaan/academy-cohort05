// debounce(fn, ms): ejecuta fn recién cuando pasan ms sin nuevas llamadas.
function debounce(fn, ms) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer); // cada llamada nueva reinicia la espera
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };
}

// Caso 1: un buscador que no consulta en cada tecla
const consultas = [];
const buscar = debounce((texto) => consultas.push(texto), 100);
buscar("c");
buscar("cl");
buscar("clo");
buscar("closure");
console.log("consultas apenas termino de escribir:", consultas);   // consultas apenas termino de escribir: []

setTimeout(() => {
  console.log("consultas después de 150 ms:", consultas);          // consultas después de 150 ms: [ 'closure' ]
  console.assert(consultas.length === 1, "debounce: debería consultar una sola vez");
  console.assert(consultas[0] === "closure", "debounce: debería usar el último texto escrito");
}, 150);

// Caso 2: llamadas separadas por más de ms se ejecutan las dos
let ejecuciones = 0;
const contar = debounce(() => ejecuciones++, 50);
contar();
setTimeout(() => contar(), 100); // llega después de que se ejecutó la primera

setTimeout(() => {
  console.log("ejecuciones:", ejecuciones);                         // ejecuciones: 2
  console.assert(ejecuciones === 2, "debounce: llamadas separadas deberían ejecutarse por separado");
}, 200);

module.exports = debounce;