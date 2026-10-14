import pedidos from './pedidos.json' with { type: 'json' };


function top5Productos(pedidos) {
    const productos = pedidos
        .filter(pedido => pedido.estado === "pagado")
        .reduce((productos, pedido) => {
            pedido.items.reduce((acc, item) => {
                acc[item.producto] =
                   (acc[item.producto] ?? 0) + item.cantidad;

                return acc;
            }, productos);

            return productos;
        }, {});

    return Object.entries(productos)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
}

console.log(top5Productos(pedidos));