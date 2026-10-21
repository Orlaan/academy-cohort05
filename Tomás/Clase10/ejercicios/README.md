# Ejercicios de React

Hacé del 1 al 4 en orden, usando la misma app. El 5 y el 6 quedan para practicar si tenés ganas. No hay que entregar nada ni abrir un PR.

## 1. ¿Qué muestra cada párrafo?

Abrí `ej01-predecir.jsx` sin ejecutarlo. Pensá qué va a mostrar cada párrafo y qué cambia entre `pending + 1`, `pending + '1'` y `'pending + 1'`.

Copialo a `src/Prediction.jsx`. Importá Prediction en App y reemplazá el contenido de bienvenida por `<Prediction />`, dentro del main. Mirá el navegador y compará con lo que esperabas.

Ahora agregá dentro de Prediction las constantes `total = 5` y `completadas = 2`. Agregá un párrafo que diga “Te quedan 3 tareas”, calculando la resta entre llaves. No escribas el 3 fijo ni uses pending para ese mensaje.

¿Qué va a pasar si cambiás completadas a 4? Probalo. Por ahora podés dejar “1 tareas”; no hace falta resolver el singular.

## 2. Corregir Welcome

Copiá `ej02-corregir.jsx` a `src/Welcome.jsx`. Queremos que el h2 muestre el valor de name. Este intento de usarlo en App también tiene errores:

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

Revisá Welcome y App. Corregí un problema por vez hasta que se vea Academy. Usá la variable, no escribas Academy directamente en el h2.

Si te trabás, fijate en la exportación, la mayúscula de la etiqueta y las llaves. Tratá de entender por qué hacía falta cada cambio.

## 3. Crear TaskHeader

Copiá `ej03-header.jsx` a `src/TaskHeader.jsx` y completá la función:

1. Dentro del header, agregá un h1 y un párrafo con el título y la descripción que quieras.
2. Poné `className="task-header"` en el header para usar los estilos.
3. Exportá TaskHeader, importalo en App y usá `<TaskHeader />` en lugar de Welcome. Quitá el import de Welcome.
4. Cambiá el título desde TaskHeader y comprobá que cambia en la pantalla sin tocar App.

Podés dejar Prediction y Welcome en sus archivos, aunque ya no los muestres.

## 4. Crear TaskItem

Copiá `ej04-task-item.jsx` a `src/TaskItem.jsx` y completalo:

1. Dentro de la función, creá una constante `titulo` con el nombre de una tarea.
2. Dentro del article, agregá un h2 que muestre `{titulo}` y un párrafo que diga Pendiente.
3. Poné `className="task-item"` en el article.
4. Exportá TaskItem, importalo en App y mostralo debajo de TaskHeader.
5. Cambiá titulo y mirá el resultado.

Al terminar deberías ver el header y una card con tu tarea. Si te queda tiempo, usá dos etiquetas TaskItem: ¿qué esperás que muestren?

## 5. Un resumen de tareas (opcional)

Copiá `ej05-task-summary.jsx` a `src/TaskSummary.jsx`. Dentro de la función, definí `total = 5` y `completadas = 2`.

Mostrá total, completadas y pendientes en tres párrafos. Calculá las pendientes entre llaves, sin escribir el resultado fijo. Usá `className="task-hint"` en el section, exportá TaskSummary y mostralo desde App debajo de TaskItem.

Cambiá completadas a 4 y fijate qué textos cambian. Deberías pasar de 3 pendientes a 1. Son números de ejemplo: no cuentan las cards de la pantalla.

## 6. Agrupar la pantalla en TaskBoard (opcional)

Copiá `ej06-task-board.jsx` a `src/TaskBoard.jsx`.

1. Importá TaskHeader, TaskItem y TaskSummary en TaskBoard.
2. Dentro del section, mostrá un TaskHeader, dos TaskItem y un TaskSummary, en ese orden.
3. Exportá TaskBoard. En App, reemplazá las etiquetas anteriores por `<TaskBoard />` dentro del main. Conservá `className="task-board"` y quitá los imports que ya no usás.
4. Cambiá titulo en TaskItem. ¿Por qué cambian las dos cards?

Las dos cards muestran lo mismo porque las dos usan el mismo componente, y titulo está fijo dentro de TaskItem. Para que cada una muestre algo distinto habría que pasarle datos desde afuera

No hace falta agregar botones, guardar tareas ni pasar datos entre components.
