# Clase 10 - Primeros components de React

React + JavaScript/JSX. Starter sin las soluciones de los ejercicios.

## Para trabajar hoy

Primero mirá el [video de Mosh](https://www.youtube.com/watch?v=SqcY0GlETPk): del **2:43 al 4:57** y del **9:17 al 21:04**. Prestá especial atención al **11:20-16:41**, donde crea y muestra el primer component.

Podés saltear la instalación del video: usá este proyecto y los comandos de abajo. Mosh usa `.tsx`; acá trabajamos con JavaScript y `.jsx`.

Después avanzá con los **ejercicios 1 al 4**. Los ejercicios **5 y 6 son opcionales**. Los tiempos de las consignas son orientativos: si te trabás, anotá qué intentaste y el mensaje de error para revisarlo en el próximo encuentro.

## Arrancar

Desde la raíz del repo:

```sh
cd Clase10
npm ci
npm run dev
```

Usá Node.js 22.14 o una versión compatible más reciente. Abrí la dirección que imprime Vite. Para detenerlo: Ctrl+C.

## Trabajar

1. Abrí [las consignas](ejercicios/README.md).
2. Leé el archivo del ejercicio y escribí tu predicción antes de ejecutarlo.
3. Copialo a `src` con el nombre indicado, completalo y usalo desde `App.jsx`.
4. Guardá, mirá el navegador y guardá tu explicación para la descripción del PR.

Los originales de `ejercicios` contienen errores intencionales o tareas pendientes. No se cargan automáticamente en la app. Trabajá en las copias de `src`.

## Archivos preparados

- `src/App.jsx`: la pantalla donde usás tus components.
- `src/main.jsx`: conecta React con el contenedor de index.html.
- `src/index.css`: estilos; no hace falta modificarlos hoy.
- `index.html`: contenedor root y carga de main.jsx.

## Comprobar

```sh
npm run lint
npm run build
```

El lint revisa `src`, donde están tus respuestas. El build comprueba el código que usa la app. Los archivos de ejercicios no son soluciones y pueden no compilar hasta completarlos.

## Entrega

Seguí el flujo de ramas y PR de la academia. Incluí tus archivos, una captura, la predicción y la explicación de los errores corregidos. No subas `node_modules` ni `dist`.
