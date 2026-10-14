import pedidos from './pedidos.json' with { type: 'json' };

function totalFacturadoPorCliente(pedidos) {
    return pedidos
    // Donde el estado sea pagado
        .filter(pedido => pedido.estado === "pagado")
        // Calcula el importe de cada pedido y lo acumula por cliente
        .reduce((totales, pedido) => {
            
            const subtotal = pedido.items.reduce(
                (total, item) =>
                    total + item.precioUnitario * item.cantidad,
                0
            );

            // Obtiene el descuento del cupon, si no existe utiliza 0
            // Cambiar ya que usa decimales y esta diferente el descuento
            const descuento = pedido.cupon?.descuento ?? 0;

            // Lo mismo para el envio, contempla si tiene algun valor sino usa 0
            const envio = pedido.envio ?? 0;

            const totalPedido = subtotal - subtotal * descuento + envio;

            // Acumula y si el cliente no existe comienza en 0
            totales[pedido.cliente] =
                (totales[pedido.cliente] ?? 0) + totalPedido;

            return totales;
        }, {});
}

console.log(totalFacturadoPorCliente(pedidos));