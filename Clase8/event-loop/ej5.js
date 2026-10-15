// Predicción antes de ejecutar:
// ...
// Salida observada y explicación del call stack:
// ...

function mostrar() {
  console.log('función: inicio');
  setTimeout(() => console.log('timer de la función'), 0);
  console.log('función: fin');
}

console.log('programa: inicio');
mostrar();
console.log('programa: fin');

// Variación: llamá a mostrar() dos veces antes del último console.log.
// Escribí otra predicción, ejecutá y compará. ¿Un timer interrumpe mostrar()?
