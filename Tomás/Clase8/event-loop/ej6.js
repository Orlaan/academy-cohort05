// Predicción antes de ejecutar: Inicio, Fin, Callback Exterior: Inicio, Callback Exterior: Fin, Callback Interior
// ...
// Salida observada y explicación: Tal cual lo predicho. El callback interior se queda como último en la cola de tareas, y se ejecuta después de que el callback exterior termina.
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