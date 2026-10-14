//miMap(arr,fn) -> Aplicar un array nuevo aplicando cada funcion fn a cada elemento
function miMap(arr, fn) {
    const resultado = [];

    for(let i = 0; i < arr.length; i++){
        // Aplicar fn al elemento, indice y array original
        // Guardar el resultado en el resultado
        resultado[resultado.length] = fn(arr[i],i,arr)
    }
    return resultado;
}

//miFilter() guarda el elemento original solamente cuando fn devuelve un valor verdadero
function miFilter(arr, fn) {
    const resultado = [];
     
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i,arr)){
            resultado[resultado.length] = arr[i];
        }
    }
    return resultado;
}

//miReduce()
function miReduce(arr,fn, ...inicial) {
    let acumulado;
    let desde;
    
    if(inicial.length>0){
        acumulado = inicial[0];
        desde = 0;
    } else {
        //Si no hay valor inicial y el array esta vacio
        if(arr.length === 0){
            throw new TypeError(
                'Reduce of empty array with no initial value'
            )
        }

        acumulado = arr[0];
        desde = 1;
    }

    //Recorrer el array y actualizar el controlador
    for(let i = desde; i< arr.length; i++){
        acumulado = fn(acumulado,arr[i],i,arr);
    }

    return acumulado;
}

module.exports = {miMap,miFilter,miReduce};