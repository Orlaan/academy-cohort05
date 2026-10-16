// Predicción antes de ejecutar:
// - inicio -> fin -> callback exterior: inicio -> callback exterior:fin -> callback interior
// Salida observada y explicación:
// - inicio -> fin -> callback exterior: inicio -> callback exterior:fin -> callback interior
// - Primero se ejecuta el codigo sincronico que no tiene aplicado ningun timer, posteriormente 
// ejecuta el callback exterior de principio a fin, y posterior a este el callback interior anidado

console.log('inicio');

setTimeout(() => {
  console.log('callback exterior: inicio');
  setTimeout(() => console.log('callback interior'), 0);
  console.log('callback exterior: fin');
}, 0);

console.log('fin');

// ¿Cuándo se registra el timer interior?
// - Se registra recien cuando llega a la linea de callback interior, ya que esta dentro del exterior
// ¿Puede ejecutarse antes de que termine el callback exterior? ¿Por qué?
// No, el callback exterior debe terminar primero. Javascript ejecuta cada callback hasta terminarlo
// el timer interior no interrumpe esta ejecución