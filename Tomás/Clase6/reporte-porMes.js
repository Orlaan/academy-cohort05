// Reporte 3: pedidos agrupados por mes
 
const fs = require('fs');
const pedidos = JSON.parse(fs.readFileSync('pedidos.json', 'utf8'));
 
const pedidosPorMes = (pedidos) =>
  pedidos.reduce((acc, p) => {
    const mes = p.fecha.slice(0, 7);
    return {
      ...acc,
      [mes]: [...(acc[mes] ?? []), p],
    };
  }, {});
 
const porMes = pedidosPorMes(pedidos);
 
console.log(Object.entries(porMes).map(([mes, lista]) => `${mes}: ${lista.length} pedidos`));