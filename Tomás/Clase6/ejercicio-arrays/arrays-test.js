const test = require('node:test');
const assert = require('node:assert');
const { miMap, miFilter, miReduce } = require('./arrays');

const numeros = [1, 2, 3, 4, 5];

// Tests de miMap
test('miMap transforma igual que map', () => {
  const doble = (n) => n * 2;
  assert.deepStrictEqual(miMap(numeros, doble), numeros.map(doble));
});

test('miMap pasa (elemento, índice, array) al callback', () => {
  const fn = (el, i, arr) => [el, i, arr.length];
  assert.deepStrictEqual(miMap(numeros, fn), numeros.map(fn));
});

test('miMap no modifica el array original', () => {
  const copia = [...numeros];
  miMap(numeros, (n) => n * 10);
  assert.deepStrictEqual(numeros, copia);
});

// Tests de miFilter
test('miFilter filtra igual que filter', () => {
  const esPar = (n) => n % 2 === 0;
  assert.deepStrictEqual(miFilter(numeros, esPar), numeros.filter(esPar));
});

test('miFilter pasa (elemento, índice, array) al callback', () => {
  const fn = (el, i, arr) => i < arr.length - 2;
  assert.deepStrictEqual(miFilter(numeros, fn), numeros.filter(fn));
});

// Tests de miReduce

test('miReduce suma igual que reduce (con valor inicial)', () => {
  const sumar = (acc, n) => acc + n;
  assert.strictEqual(miReduce(numeros, sumar, 0), numeros.reduce(sumar, 0));
});

test('miReduce sin valor inicial usa el primer elemento', () => {
  const sumar = (acc, n) => acc + n;
  assert.strictEqual(miReduce(numeros, sumar), numeros.reduce(sumar));
});

test('miReduce con array vacío sin valor inicial tira TypeError', () => {
  const sumar = (acc, n) => acc + n;
  assert.throws(() => miReduce([], sumar), TypeError);
});