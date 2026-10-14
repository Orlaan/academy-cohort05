// miMap: devuelve un array nuevo con el resultado de fn para cada elemento
function miMap(arr, fn) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado[resultado.length] = fn(arr[i], i, arr);
  }
  return resultado;
}

// miFilter: devuelve un array nuevo solo con los elementos donde fn da true
function miFilter(arr, fn) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      resultado[resultado.length] = arr[i];
    }
  }
  return resultado;
}

// miReduce: reduce el array a un solo valor
function miReduce(arr, fn, ...inicial) {
  let acumulado;
  let desde;

  if (inicial.length > 0) {
    acumulado = inicial[0];
    desde = 0;
  } else {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    acumulado = arr[0];
    desde = 1;
  }

  for (let i = desde; i < arr.length; i++) {
    acumulado = fn(acumulado, arr[i], i, arr);
  }
  return acumulado;
}

module.exports = { miMap, miFilter, miReduce };