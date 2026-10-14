// Reporte 2: top 5 productos más vendidos.
 
const fs = require('fs');
const pedidos = JSON.parse(fs.readFileSync('pedidos.json', 'utf8'));
 
const top5Productos = (pedidos) => {
  const unidadesPorProducto = pedidos
    .filter((p) => p.estado === 'pagado')
    .flatMap((p) => p.items)
    .reduce((acc, item) => ({
      ...acc,
      [item.sku]: {
        producto: item.producto,
        unidades: (acc[item.sku]?.unidades ?? 0) + item.cantidad,
      },
    }), {});
 
  return Object.values(unidadesPorProducto)
    .toSorted((a, b) => b.unidades - a.unidades)
    .slice(0, 5);
};
 
console.log(top5Productos(pedidos));