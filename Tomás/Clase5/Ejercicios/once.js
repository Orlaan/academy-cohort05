// once(fn): ejecuta fn una sola vez; las llamadas siguientes devuelven el primer resultado.
function once(fn) {
  let llamada = false;
  let resultado;

  return function (...args) {
    if (!llamada) {
      llamada = true;
      resultado = fn.apply(this, args);
    }
    return resultado;
  };
}

// Caso 1: inicializar una conexión solo una vez
let conexionesCreadas = 0;
const conectar = once(() => {
  conexionesCreadas++;
  return { id: conexionesCreadas };
});
const c1 = conectar();
const c2 = conectar();
console.log("conexionesCreadas:", conexionesCreadas);   // conexionesCreadas: 1
console.log("¿c1 === c2?", c1 === c2);                  // ¿c1 === c2? true
console.assert(conexionesCreadas === 1, "once: debería crear una sola conexión");
console.assert(c1 === c2, "once: debería devolver siempre la misma conexión");

// Caso 2: ignora los argumentos de llamadas posteriores
const sumarUnaVez = once((a, b) => a + b);
const r1 = sumarUnaVez(2, 3);
const r2 = sumarUnaVez(10, 10);
console.log("r1:", r1);   // r1: 5
console.log("r2:", r2);   // r2: 5
console.assert(r1 === 5, "once: primera llamada debería dar 5");
console.assert(r2 === 5, "once: segunda llamada debería seguir dando 5");

// Caso 3: respeta el this
const obj = { valor: 42, getValor: once(function () { return this.valor; }) };
const v = obj.getValor();
console.log("v:", v);     // v: 42
console.assert(v === 42, "once: debería respetar el this");

console.log("once.js: pruebas ejecutadas");
module.exports = once;
