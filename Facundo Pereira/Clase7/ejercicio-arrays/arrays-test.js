const test = require('node:test');
const assert = require('node:assert/strict')

const { miMap, miFilter, miReduce } = require('./arrays');

const numeros = [1, 2, 3, 4, 5];

// TESTS DE miMap
test('miMap transforma igual que map', () => {
    const doble = n => n * 2;

    assert.deepStrictEqual(
        miMap(numeros, doble),
        numeros.map(doble)
    );
});

test('miMap pasa elemento, índice y array al callback', () => {
    const fn = (el, i, arr) => [el, i, arr.length];

    assert.deepStrictEqual(
        miMap(numeros, fn),
        numeros.map(fn)
    );
});

test('miMap no modifica el array original', () => {
    const copia = [...numeros];

    miMap(numeros, n => n * 10);

    assert.deepStrictEqual(numeros, copia);
});

// TESTS DE miFilter
test('miFilter filtra igual que filter', () => {
    const esPar = n => n % 2 === 0;

    assert.deepStrictEqual(
        miFilter(numeros, esPar),
        numeros.filter(esPar)
    );
});

test('miFilter pasa elemento, índice y array al callback', () => {
    const fn = (el, i, arr) => i < arr.length - 2;

    assert.deepStrictEqual(
        miFilter(numeros, fn),
        numeros.filter(fn)
    );
});

test('miFilter no modifica el array original', () => {
    const copia = [...numeros];

    miFilter(numeros, n => n > 2);

    assert.deepStrictEqual(numeros, copia);
});

// TESTS DE miReduce
test('miReduce suma igual que reduce con valor inicial', () => {
    const sumar = (acc, n) => acc + n;

    assert.strictEqual(
        miReduce(numeros, sumar, 0),
        numeros.reduce(sumar, 0)
    );
});

test('miReduce suma igual que reduce sin valor inicial', () => {
    const sumar = (acc, n) => acc + n;

    assert.strictEqual(
        miReduce(numeros, sumar),
        numeros.reduce(sumar)
    );
});

test('miReduce usa el valor inicial aunque sea undefined', () => {
    const fn = (acc, n) => acc === undefined ? n : acc + n;

    assert.strictEqual(
        miReduce([1, 2], fn, undefined),
        [1, 2].reduce(fn, undefined)
    );
});

test('miReduce con array vacío y valor inicial devuelve el inicial', () => {
    const sumar = (acc, n) => acc + n;

    assert.strictEqual(
        miReduce([], sumar, 10),
        [].reduce(sumar, 10)
    );
});

test('miReduce con array vacío sin valor inicial lanza TypeError', () => {
    const sumar = (acc, n) => acc + n;

    assert.throws(
        () => miReduce([], sumar),
        TypeError
    );
});

test('miReduce pasa acumulador, elemento, índice y array al callback', () => {
    const fn = (acc, el, i, arr) =>
        acc + `${el}:${i}:${arr.length};`;

    assert.strictEqual(
        miReduce(numeros, fn, ''),
        numeros.reduce(fn, '')
    );
});