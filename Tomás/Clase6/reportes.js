// Reporte por cliente

const fs = require('fs');
const pedidos = JSON.parse(fs.readFileSync('pedidos.json', 'utf8'));

const calcularTotal = (pedido) => {
  const subtotal = pedido.items
    .map((item) => item.precioUnitario * item.cantidad)
    .reduce((acc, precio) => acc + precio, 0);

  const descuento = pedido.cupon ? subtotal * pedido.cupon.descuento : 0;
  const envio = pedido.envio ?? 0;

  return subtotal - descuento + envio;
};

const totalPorCliente = (pedidos) =>
  pedidos
    .filter((p) => p.estado === 'pagado')
    .map((p) => ({ cliente: p.cliente, total: calcularTotal(p) }))
    .reduce((acc, p) => ({
      ...acc,
      [p.cliente]: (acc[p.cliente] ?? 0) + p.total,
    }), {});

console.log(totalPorCliente(pedidos));