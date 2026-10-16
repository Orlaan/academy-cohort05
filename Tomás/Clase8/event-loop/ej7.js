// Predicción del orden y de la espera aproximada: Inicio del trabajo, Fin del trabajo, Timer atendido tras 500 ms
// ...
// Salida observada y explicación: Tal cual lo predicho. El timer se ejecuta después de que el while termina, ya que el while bloquea el event loop y no permite que se atienda el timer hasta que el call stack esté vacío.
// ...
const inicio = Date.now();
setTimeout(() => {
  console.log('timer atendido tras', Date.now() - inicio, 'ms');
}, 100);
console.log('inicio del trabajo');
const fin = Date.now() + 500;
while (Date.now() < fin) {}
console.log('fin del trabajo');
// Cambiá solo la duración del while a 1000 ms y repetí la predicción.
// Predicción: Inicio del trabajo, Fin del trabajo, Timer atendido tras 1000 ms

// Los tiempos medidos pueden variar: ¿por qué 100 ms no es una hora exacta?
// Porque el 100 de setTimeout es un tiempo mínimo, no una garantía. Significa "no ejecutes esto antes de 100 ms". El callback corre la primera vez que el event loop lo puede atender después de ese tiempo, y eso depende de si el stack está libre y de lo que esté haciendo la computadora en ese momento.

// Desafío: creá ej8.js con una función propia y un timer.
// Tiene que mostrar que el callback espera al código synchronous.
// Incluí tu predicción, la salida real y una explicación breve en comentarios.

//Resuelto en ./ej8.js