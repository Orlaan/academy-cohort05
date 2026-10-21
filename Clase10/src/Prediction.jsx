export default function Prediction() {
  const pending = 2;
  const total = 5;
  const completadas = 2;

  return (
    <section>
      <p>{pending + 1}</p>
      <p>{pending + '1'}</p>
      <p>{'pending + 1'}</p>
      <p> Te quedan {total - completadas} tareas pendientes por hacer</p>
    </section>
  );
}
