// Predicción del orden y de la espera aproximada:
// Inicio del trabajo -> Fin del trabajo -> Timer atendido tras ms
// Salida observada y explicación:
// Inicio del trabajo -> Fin del trabajo -> Timer atendido tras 508 ms

const inicio = Date.now();

setTimeout(() => {
  console.log('timer atendido tras', Date.now() - inicio, 'ms');
}, 100);

console.log('inicio del trabajo');
const fin = Date.now() + 500;
while (Date.now() < fin) {}
console.log('fin del trabajo');

// Cambiá solo la duración del while a 1000 ms y repetí la predicción.
// - Inicio del trabajo -> fin del trabajo -> Timer atendido tras 1008ms
// Los tiempos medidos pueden variar: ¿por qué 100 ms no es una hora exacta?
// - 100ms no es una hora exacta porque setTimeout establece un tiempo minimo de espera.
// Si el hilo principal esta ocupado el callback debe esperar hasta que pueda ejecutarse

// Desafío: creá ej8.js con una función propia y un timer.
// Tiene que mostrar que el callback espera al código synchronous.
// Incluí tu predicción, la salida real y una explicación breve en comentarios.