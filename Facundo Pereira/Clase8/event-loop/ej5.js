// Predicción antes de ejecutar:
// - programa: inicio -> funcion: inicio -> funcion:fin -> timer de la funcion -> programa:fin
// Salida observada y explicación del call stack:
// - programa: inicio -> funcion: inicio -> funcion:fin ->  programa:fin -> timer de la funcion ->
// - Cuando termina el codigo sincrónico pendiente, se ejecuta el callback del timer de la función
// de mostrar()

function mostrar() {
  console.log('función: inicio');
  setTimeout(() => console.log('timer de la función'), 0);
  console.log('función: fin');
}

console.log('programa: inicio');
mostrar();
//mostrar();
console.log('programa: fin');

// Variación: llamá a mostrar() dos veces antes del último console.log.
// Escribí otra predicción, ejecutá y compará. ¿Un timer interrumpe mostrar()?
// - Las dos llamadas a mostrar() se ejecutan de forma síncrona. Cada llamada programa
// un timer, pero ninguno interrumpe la funcion. Primero termina el código sincrono y despues
// se ejecutan los callbacks de ambos timers.