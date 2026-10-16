// Predicción antes de ejecutar:
// ...
// Salida observada y explicación:
// ...

console.log('inicio');

setTimeout(() => {
  console.log('callback exterior: inicio');
  setTimeout(() => console.log('callback interior'), 0);
  console.log('callback exterior: fin');
}, 0);

console.log('fin');

// ¿Cuándo se registra el timer interior?
// ¿Puede ejecutarse antes de que termine el callback exterior? ¿Por qué?
// ...
