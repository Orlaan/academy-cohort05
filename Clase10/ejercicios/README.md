# Clase 10 - Seis ejercicios

Práctica de fundamentos para entrevistas junior: leer código, anticipar resultados, corregir errores y escribir components. No requiere props, state, hooks, eventos ni listas.

Usá la misma app para los seis ejercicios. El servidor sigue ejecutándose mientras editás. Con los dos ejercicios nuevos, la secuencia completa llega a 80 minutos; si la clase dura 60 minutos, hacé los ejercicios 5 y 6 como práctica posterior.

## 1. Predecir, explicar y modificar - 8 minutos (10-18)

Abrí `ej01-predecir.jsx` sin ejecutarlo y seguí estos pasos:

1. Escribí qué mostrará cada uno de los tres párrafos. Explicá qué hace `+` en `{pending + 1}` y `{pending + '1'}`, y qué cambia en `{'pending + 1'}`.
2. Copialo a `src/Prediction.jsx`. Importá Prediction desde App y reemplazá el contenido de bienvenida por `<Prediction />`, dentro del main. Ejecutá y compará con tus predicciones; anotá y explicá cualquier diferencia.
3. Definí `total = 5` y `completadas = 2` dentro del componente. Agregá un párrafo que muestre “Te quedan 3 tareas”. Calculá la diferencia dentro del JSX, sin escribir el resultado fijo ni usar `pending` para ese mensaje.
4. Antes de cambiar `completadas` a 4, anticipá el nuevo mensaje. Guardá y comprobá que se actualiza sin editar el párrafo.

**Propósito:** distinguir suma numérica, concatenación y texto literal, y construir un mensaje usando una expresión JavaScript dentro del JSX.

**Listo cuando:** justificás los tres resultados iniciales y el mensaje pasa de “Te quedan 3 tareas” a “Te quedan 1 tareas” al cambiar solo `completadas`. Por ahora mantené la palabra “tareas”: no hace falta resolver singular y plural. Incluí las predicciones y la comparación en la descripción del PR.

## 2. Encontrar y corregir errores - 10 minutos (18-28)

Copiá `ej02-corregir.jsx` a `src/Welcome.jsx`. Queremos ver un h2 con el valor de la variable `name`. Este es el intento de integración, que también necesita correcciones:

```jsx
import welcome from './Welcome';

export default function App() {
  return (
    <main className="task-board">
      <welcome />
    </main>
  );
}
```

Antes de probar, anotá los problemas que encontrás. Corregí el archivo y App, un problema por vez, hasta que aparezca el valor esperado. No reemplaces la variable por texto fijo.

**Listo cuando:** aparece el valor de `name` y justificás la exportación, la mayúscula en la etiqueta y el uso de llaves. Anotá por qué el ejemplo original no funcionaba.

## 3. Crear TaskHeader - 12 minutos (28-40)

Copiá `ej03-header.jsx` a `src/TaskHeader.jsx` y completalo:

1. Creá una función TaskHeader que devuelva un header.
2. Mostrá un h1 y un párrafo con título y descripción elegidos por vos.
3. Usá `className="task-header"` para el estilo preparado.
4. Exportalo, importalo en App y mostralo en lugar de Welcome. Quitá el import que ya no usás.
5. Cambiá el título sin tocar App y comprobá el resultado.

**Listo cuando:** se ve el header y podés explicar qué archivo produce esa parte. Conservá Prediction y Welcome como registro de los ejercicios anteriores; ya no hace falta mostrarlos.

## 4. Crear TaskItem - 15 minutos (40-55)

Copiá `ej04-task-item.jsx` a `src/TaskItem.jsx` y completalo:

1. Creá una función TaskItem con una constante `titulo`.
2. Devolvé un article con un h2 que muestre `{titulo}` y un párrafo con Pendiente.
3. Usá `className="task-item"` en el article; opcionalmente `status` en el párrafo.
4. Exportalo, importalo y mostralo debajo de TaskHeader desde App.
5. Cambiá la constante y comprobá la UI.

**Listo cuando:** se ven el header y la card, y el título viene de la variable.

Si terminás antes, predecí qué pasa al usar dos etiquetas TaskItem y probalo. No cambies el component para recibir props.

## 5. Calcular un resumen - 10 minutos (55-65)

Copiá `ej05-task-summary.jsx` a `src/TaskSummary.jsx` y seguí el comentario del archivo:

1. Definí las constantes `total = 5` y `completadas = 2` dentro del componente.
2. Mostrá total, completadas y pendientes en tres párrafos con etiquetas claras. Calculá pendientes dentro de las llaves; no escribas el resultado fijo.
3. Usá `className="task-hint"` en el section, exportá el componente y mostralo debajo de TaskItem desde App.
4. Antes de cambiar completadas a 4, anotá qué textos van a cambiar. Guardá y compará.

**Propósito:** practicar expresiones JavaScript en JSX y valores calculados.

**Listo cuando:** primero se ven 3 pendientes y después 1, sin modificar el JSX para escribir esos resultados. Son datos de ejemplo, independientes de las tarjetas que se muestran.

## 6. Componer TaskBoard - 10 minutos (65-75)

Copiá `ej06-task-board.jsx` a `src/TaskBoard.jsx` y seguí el comentario del archivo:

1. Importá TaskHeader, TaskItem y TaskSummary en TaskBoard.
2. Mostrá dentro del section un TaskHeader, dos TaskItem y un TaskSummary, en ese orden.
3. Exportá TaskBoard. En App, reemplazá los componentes anteriores por `<TaskBoard />` dentro del main; conservá `className="task-board"` y quitá los imports que ya no usás.
4. Predecí qué tarjetas cambiarán al editar `titulo` en TaskItem. Probalo y explicá por qué.

**Propósito:** organizar la pantalla por composición y reutilizar una definición de componente sin props ni listas.

**Listo cuando:** se ven un encabezado, dos tarjetas y un resumen; al cambiar el título en TaskItem se actualizan ambas tarjetas. Podés explicar la relación entre App, TaskBoard y sus componentes.

## Revisión - 5 minutos (75-80)

Compartí por chat una frase: qué produce tu component y dónde lo usás. Para la entrega, incluí los archivos de `src` y tus predicciones en la descripción del PR, una captura de la pantalla final y una explicación corta del ejercicio 2.

Comprobá `npm run lint` y `npm run build`. Si no terminaste, indicá qué quedó pendiente. No hace falta implementar interacción ni guardar tareas.
