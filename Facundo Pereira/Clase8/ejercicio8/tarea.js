// Continuación para casa: completá los módulos y después este archivo.
// Se ejecuta con node tarea.js desde esta carpeta, configurada como ES modules.
import {sumar,restar,multiplicar,dividir} from './matematica.js';
import {aMilisegundos, aTexto} from './tiempos.js';
import despedir from './despedida.js';


// 1. Importá sumar, restar, multiplicar y dividir desde matematica.js.
// Imprimí una llamada a cada función con números elegidos por vos.
// Agregá otro caso por función, usando algún cero, decimal o número negativo.
// No uses cero como divisor.

console.log(sumar(5,12));
console.log(sumar(5,2.50))
console.log(restar(15,12));
console.log(restar(15,20));
console.log(multiplicar(2,12));
console.log(dividir(25,5));

// 2. Importá el default de despedida.js con otro nombre local.
// Imprimí dos despedidas con nombres distintos.
console.log(despedir("Facundo"));

// 3. Importá aMilisegundos y aTexto desde tiempos.js.
// Convertí '30s', '5m', '2h' y '1d' a milisegundos.
// Convertí 1000, 60000, 90000 y 3600000 a texto.
// Antes de correr, anotá qué esperás que devuelva cada conversión.
console.log(aMilisegundos("30s"));
console.log(aMilisegundos("5m"));
console.log(aMilisegundos("2h"));
console.log(aMilisegundos("1d"));

console.log(aTexto(1000));
console.log(aTexto(60000));
console.log(aTexto(90000));
console.log(aTexto(360000));


// 4. Combiná los módulos: convertí dos duraciones a milisegundos,
// sumalas usando sumar y convertí el total a texto.

console.log(aTexto(sumar(aMilisegundos("100m"),aMilisegundos("30s"))));

// Predicciones y resultados observados:
// "100m" -> 6000000 ms
// "30s" -> 30000 ms
// Total -> 6030000 ms
// Conversión final -> "100.5m"

// 5. Agregá un script llamado tarea en package.json que ejecute este archivo.
// Probalo con npm run tarea. Conservá el script start de la clase.
// ¿Por qué un import lleva braces y el otro no?
// - Los named exports se importan con llaves y usando el nombre exportado
// - Los default exports se importan sin llaves y permiten elegir otro nombre local
// ¿Qué archivos cambiaron al instalar ms? ¿Cuáles van a Git?
// - npm install ms agrega la dependencia a package.json y actualiza el package-lock.json
// - Ambos archivos van a git
// - node_modules/ no va a Git porque es una carpeta generada y esta excluida con el .gitignore
