// Predicción antes de ejecutar (escribí el orden completo de los logs):
// ...
// Salida observada y explicación:
// ...

async function saludar() {
  return 'hola';
}

const r = saludar();
console.log(typeof r);
console.log(r instanceof Promise);

r.then((v) => console.log(v));

console.log('fin');
