export default function Prediction() {
  const pending = 2;
  const total = 5;
  const completadas = 2;

  return (
    <section>
      <p>{pending + 1}</p>
      <p>{pending + '1'}</p>
      <p>{'pending + 1'}</p>
      <p>Te quedan {total - completadas} tareas por completar.</p>
    </section>
  );
}

//3
//21
//"pending + 1" porque no se pasa con llaves.