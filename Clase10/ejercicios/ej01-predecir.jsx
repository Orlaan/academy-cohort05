/*
Qué hacer:
1. Sin ejecutar, predecí el texto de cada párrafo. Explicá qué hace el signo
   + en cada expresión y por qué las comillas cambian el resultado.
2. Copiá este archivo a src/Prediction.jsx e integralo en App. Ejecutá y
   compará los resultados con tus predicciones.
3. Definí total = 5 y completadas = 2 dentro del componente. Agregá un
   párrafo que muestre "Te quedan 3 tareas", calculando la diferencia
   dentro del JSX, sin escribir el resultado fijo ni usar pending.
4. Antes de cambiar completadas a 4, predecí el nuevo mensaje. Guardá y
   comprobá el resultado sin modificar el párrafo.
Propósito: distinguir suma numérica, concatenación y texto literal, y usar
expresiones JavaScript dentro de JSX para construir un mensaje calculado.
*/
export default function Prediction() {
  const pending = 2;

  return (
    <section>
      <p>{pending + 1}</p>
      <p>{pending + '1'}</p>
      <p>{'pending + 1'}</p>
    </section>
  );
}
