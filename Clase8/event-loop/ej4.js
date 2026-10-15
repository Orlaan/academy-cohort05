console.log('inicio');
setTimeout(() => { console.log('timeout 0'); }, 0);
const fin = Date.now() + 2000;
while (Date.now() < fin) {}
console.log('fin del bucle');
