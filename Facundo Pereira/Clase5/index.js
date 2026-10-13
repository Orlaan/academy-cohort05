//1. Funcion once() : Guarda solamente un resultado
function inicializar() {
    console.log("Conexión inicializada");
    return "Conectado";
}


// once() recibe otra función y devuelve una nueva que garantiza que la original se ejecute solamente una vez.
function once(fn) {
    let ejecutada = false;
    let resultado;
    return function (...args) {
        if (!ejecutada) {
            ejecutada = true;
            resultado = fn(...args);
        }

        return resultado;
    }
}

// Caso de prueba 1:
function sumar(a,b) {
    return a + b;
}

const sumarUnaVez = once(sumar);
console.assert(
    sumarUnaVez(2,3) === 5,
    "Test 1 fallido: deberia devolver 5"
)

// Caso de prueba 2 ejecutar la funcion original una sola vez:
let contador = 0;

function incrementar(){
    contador++;
    return contador;
}

const incrementarUnaVez = once(incrementar);

incrementarUnaVez();
incrementarUnaVez();
incrementarUnaVez();

console.assert(
    contador === 1,
    "Test 2 fallido: la funcion deberia ejecutarse una sola vez"
)

console.log("Pruebas once finalizadas")

//2. Funcion memoize()
// Fibonacci: Cada numero se obtiene sumando los dos anteriores
const fibonacci = memoize(function (n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
});

function memoize(fn) {
    const cache = new Map();
    return function (n) {
        // Si ya calculamos ese argumento, devuelve el resultado guardado
        if (cache.has(n)) {
            return cache.get(n);
        }
        const resultado = fn(n);
        cache.set(n, resultado);

        return resultado;
    };
}

// Caso de prueba 1:
function duplicar(n){
    return n*2;
}

const duplicarMemo = memoize(duplicar);

console.assert(
    duplicarMemo(5) === 10,
    "Test 1 fallido: deberia devolver 10"
)

// Caso de prueba 2: No vuelve a calcular un resultado guardado

let contadorPrueba = 0;

function calcularCuadrado(n){
    contadorPrueba++;
    return n * n;
}

const cuadradoMemo = memoize(calcularCuadrado);

cuadradoMemo(4)
cuadradoMemo(4)

console.assert(
    contador === 1 ,
    "Test 2 fallido: Deberia calcular el mismo argumento una sola vez"
)

console.log("Pruebas memoize finalizadas")
//3. debounce(): Cada vez que se llama a la función, reiniciamos un temporizador
// Solo se ejecuta cuando pasa un tiempo sin recibir llamadas
// Ejemplo de NETFLIX
//  En el index.html hecho para probar

function debounce(fn, ms) {
    let timer;
    return function () {
        // Cancela el temporizador anterior si todavia esta pendiente
        return function (...args) {


            clearTimeout(timer);

            // Crea el nuevo
            timer = setTimeout(() => {
                fn();
            }, ms);
        };
    }
}

function buscar(texto) {
    console.log("Buscando:", texto);
}

const buscarConDebounce = debounce(buscar,500);

buscarConDebounce("h");
buscarConDebounce("ho");
buscarConDebounce("hol");
buscarConDebounce("hola");

// Conclusion final:
// once(fn) => Que la funcion se ejecute una sola vez
// memoize(fn) => Que un resultado ya calculado se reutilice
// debounce(fn, ms) => Que la funcion espere hasta que no haya nuevas llamadas durante cierto tiempo