# Clase 9 · Predecí los logs

Ejercicios de nivel entrevista sobre promesas, microtasks, async/await y el event loop.

1. Abrí un archivo y leé el código **sin ejecutarlo**.
2. Escribí tu predicción en el comentario de arriba: el orden completo de los logs.
3. Ejecutalo: `node ej01-colas.mjs`
4. Si no coincide, escribí por qué en "Salida observada y explicación".

Van de menor a mayor dificultad. `ej11` y `ej12` son de nivel senior.

Reglas que vas a necesitar:

- Primero corre todo el código sincrónico.
- Cuando el stack queda vacío, se vacía **toda** la cola de microtasks (`.then`, `.catch`, `queueMicrotask`, lo que sigue después de un `await`).
- Recién después corre **una** macrotask (por ejemplo, el callback de un `setTimeout`), y se vuelve a vaciar la cola de microtasks.
