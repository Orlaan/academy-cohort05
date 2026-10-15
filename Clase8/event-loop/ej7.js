// Predicción del orden y de la espera aproximada:
// ...
// Salida observada y explicación:
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
// Los tiempos medidos pueden variar: ¿por qué 100 ms no es una hora exacta?
// ...

// Desafío: creá ej8.js con una función propia y un timer.
// Tiene que mostrar que el callback espera al código synchronous.
// Incluí tu predicción, la salida real y una explicación breve en comentarios.
