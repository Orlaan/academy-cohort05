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

//3
//31
//"pending + 1" porque no se pasa con llaves.