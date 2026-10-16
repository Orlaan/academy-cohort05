function tarea(){
    console.log("tarea:inicio");

    setTimeout(() => {
        console.log("callback de tarea")
    }, 0);

    const fin = Date.now() + 1000;
    while (Date.now() < fin) {}

    console.log("tarea:fin");
}

console.log("programa:inicio");
tarea();
console.log("programa:fin");

// La función tarea se ejecuta de forma síncrona setTimeout registra un callback, pero no interrumpe
// la función ni el bucle while. Cuando termina el código síncrono, se ejecuta el callback pendiente
