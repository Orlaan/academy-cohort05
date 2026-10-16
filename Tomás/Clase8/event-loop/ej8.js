// Desafío: creá ej8.js con una función propia y un timer.
// Tiene que mostrar que el callback espera al código synchronous.
// Incluí tu predicción, la salida real y una explicación breve en comentarios.

let total = 0;

function procesarPedidos (pedidos) {
    setTimeout(() => {
        console.log("Pedidos procesados (vistos por el timer):", total);
    }, 0);

    for (const pedido of pedidos) {
        console.log("Procesando pedido:", pedido.id);
        total += pedido.importe;
    }
    console.log("Total acumulado:", total);
}

procesarPedidos([
    { id: 1, importe: 100 },
    { id: 2, importe: 200 },
    { id: 3, importe: 300 }
]);

console.log("Fin del procesamiento de pedidos");

// Predicción: Procesando pedido 1, Procesando pedido 2, Procesando pedido 3, Total acumulado: 600, Fin del procesamiento de pedidos, Pedidos procesados (vistos por el timer): 600.

// Salida real: Procesando pedido 1, Procesando pedido 2, Procesando pedido 3, Total acumulado: 600, Fin del procesamiento de pedidos, Pedidos procesados (vistos por el timer): 600.

//Explicación: El callback del setTimeout se ejecuta después de que todo el código síncrono ha terminado de ejecutarse. Aunque el timer está configurado con un retraso de 0 ms, no se ejecutará hasta que el event loop esté libre, lo que ocurre después de que la función procesarPedidos ha terminado de procesar todos los pedidos y se ha registrado el total acumulado.