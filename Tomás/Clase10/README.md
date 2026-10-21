# Clase 10 - Primeros components de React

Mirá el [video de Mosh](https://www.youtube.com/watch?v=SqcY0GlETPk) del **2:43 al 4:57** y del **9:17 al 21:04**. Prestá atención al **11:20-16:41**, donde crea y muestra el primer component.

Podés saltear la instalación del video porque el proyecto ya está preparado. Él usa `.tsx`; acá usamos JavaScript y `.jsx`.

Después seguí con los [ejercicios 1 al 4](ejercicios/README.md). El 5 y el 6 son opcionales. **No hay que entregar nada.** Si te trabás, guardá la duda o el error para que lo veamos en la próxima clase.

## Cómo arrancar

Desde la carpeta principal del repo:

```sh
cd Clase10
npm ci
npm run dev
```

Necesitás Node.js 22.14 o una versión compatible más reciente. Abrí la dirección que aparece en la terminal y dejala ejecutándose mientras trabajás. Para detenerla, usá Ctrl+C.

## Dónde trabajar

Las consignas te indican qué archivo copiar de `ejercicios` a `src`. Algunos están incompletos o tienen errores a propósito. La app no los usa hasta que los copies y los conectes desde `src/App.jsx`.

Los estilos están en `src/index.css` y ya están preparados. No hace falta cambiar `main.jsx`, `index.html` ni la configuración.

Si querés revisar el código al terminar:

```sh
npm run lint
npm run build
```

El primero busca problemas en `src`; el segundo comprueba que la app se pueda construir.
