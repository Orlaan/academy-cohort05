// Continuación para casa: completá los módulos y después este archivo.
// Se ejecuta con node tarea.js desde esta carpeta, configurada como ES modules.

// 1. Importá sumar, restar, multiplicar y dividir desde matematica.js.
// Imprimí una llamada a cada función con números elegidos por vos.
// Agregá otro caso por función, usando algún cero, decimal o número negativo.
// No uses cero como divisor.

console.log("Ejercicio 1: Probando funciones matemáticas.");

import { sumar, restar, multiplicar, dividir } from "./matematica.js";

console.log("Suma 5 + 3 =", sumar(5, 3)); // 8
console.log("Suma -2 + 4 =", sumar(-2, 4)); // 2

console.log("Resta 10 - 7,4 =", restar(10, 7.4)); // 2,6
console.log("Resta 5 - (-3) =", restar(5, -3)); //8

console.log("Multiplicación 6 * 0 =", multiplicar(6, 0)); // 0
console.log("Multiplicación -3 * 5 =", multiplicar(-3, 5)); // -15

console.log("División 20 / 4 =", dividir(20, 4)); // 5
console.log("División -15 / 3 =", dividir(-15, 3)); // -5

// 2. Importá el default de despedida.js con otro nombre local.
// Imprimí dos despedidas con nombres distintos.

console.log("Ejercicio 2: Función de despedida.");

import adios from "./despedida.js";

console.log(adios("Tomas")); // Nos vemos Tomas!
console.log(adios("Facundo")); // Nos vemos Facundo!

// 3. Importá aMilisegundos y aTexto desde tiempos.js.
// Convertí '30s', '5m', '2h' y '1d' a milisegundos.
// Convertí 1000, 60000, 90000 y 3600000 a texto.
// Antes de correr, anotá qué esperás que devuelva cada conversión.

console.log("Ejercicio 3: Convertir tiempos a milisegundos y viceversa.");

import { aMilisegundos, aTexto } from "./tiempos.js";

console.log("30 segundos en milisegundos:", aMilisegundos("30s")); // 30000
console.log("5 minutos en milisegundos:", aMilisegundos("5m")); // 300000
console.log("2 horas en milisegundos:", aMilisegundos("2h")); // 7200000
console.log("1 día en milisegundos:", aMilisegundos("1d")); // 86400000

console.log("1000 ms en texto:", aTexto(1000)); // 1s
console.log("60000 ms en texto:", aTexto(60000)); // 1m
console.log("90000 ms en texto:", aTexto(90000)); // 1m, 30s
console.log("3600000 ms en texto:", aTexto(3600000)); // 1h

// 4. Combiná los módulos: convertí dos duraciones a milisegundos,
// sumalas usando sumar y convertí el total a texto.
// Predicciones y resultados observados:

console.log("Ejercicio 4: Combinando modulos de tiempo y matemática.");

const total = sumar(aMilisegundos("1h"), aMilisegundos("3h"));
console.log("Total de 1h + 3h en milisegundos:", total, "ms =", aTexto(total)); // 14400000 ms = 4h

// ...
// 5. Agregá un script llamado tarea en package.json que ejecute este archivo.
// Probalo con npm run tarea. Conservá el script start de la clase.


// ¿Por qué un import lleva braces y el otro no?

// Las llaves se usan para los named exports: un archivo puede tener muchos, así que hay que pedirlos por su nombre exacto. Por ejemplo, import { sumar } from './matematica.js' busca el export llamado sumar; si escribo { suma }, falla porque no existe.
// El default export es uno solo por archivo, entonces no hace falta nombrarlo: import adios from './despedida.js' trae el default y le pone el nombre local que yo elija (en el archivo original se llama despedir).

// ¿Qué archivos cambiaron al instalar ms? ¿Cuáles van a Git?

// - Se agregó "ms" en package.json.
// - Se creó package-lock.json.
// - Se creó node_modules.
// A Git van package.json y package-lock.json. node_modules no va porque cualquiera la vuelve a generar con npm install a partir de esos dos archivos.
