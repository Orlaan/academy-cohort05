import pedidos from './pedidos.json' with { type: 'json' };

function pedidosPorMes(pedidos){
    return pedidos.reduce((meses, pedido) => {
        //Primeros 7 caracteres de AAAA-MM-DD. Para obtener los pedidos agrupados por mes
        const mes = pedido.fecha.slice(0,7);
        meses[mes] = (meses[mes]??0) + 1;

        return meses;
    }, {});
}

console.log(pedidosPorMes(pedidos));
