// Predicción antes de ejecutar: Primero se muestra "programa: inicio", después llama a la función mostrar(), se muestra primero "función: inicio", después se muestra "función: fin", por último se muestra el setTimeout al finalizar la función, mostrando el "Timer de la función". Por ultimo se ejecuta el "programa: fin".
// ...
// Salida observada y explicación del call stack: El setTimeout se ejecuta después de que la función mostrar() termina, ya que el setTimeout es una función asíncrona que se coloca en la cola de tareas y se ejecuta después de que el call stack esté vacío. Por lo tanto, la salida observada es: "programa: inicio", "función: inicio", "función: fin", "programa: fin", y finalmente "timer de la función".
// ...
function mostrar() {
  console.log('función: inicio');
  setTimeout(() => console.log('timer de la función'), 0);
  console.log('función: fin');
}
console.log('programa: inicio');
mostrar();
mostrar();
console.log('programa: fin');
// Variación: llamá a mostrar() dos veces antes del último console.log.
// Escribí otra predicción, ejecutá y compará. ¿Un timer interrumpe mostrar()?
// ...
// Predicción antes de ejecutar: Primero se muestra "programa: inicio", después llama a la función mostrar() dos veces, se muestra primero "función: inicio" de la primera llamada, después se muestra "función: fin" de la primera llamada, luego se muestra "función: inicio" de la segunda llamada, después se muestra "función: fin" de la segunda llamada. Después se ejecuta el "programa: fin", y finalmente se ejecutan los setTimeout de ambas llamadas, mostrando "timer de la función" dos veces.