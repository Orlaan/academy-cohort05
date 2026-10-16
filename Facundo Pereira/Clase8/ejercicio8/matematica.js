// Escribí un named export sumar(a, b) que devuelva a + b.
// Para continuar: agregá named exports restar(a, b), multiplicar(a, b)
// y dividir(a, b). Probá dividir solo con un divisor distinto de cero.
// Cada función devuelve su resultado; los console.log van en el archivo que la usa.

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}