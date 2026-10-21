export default function TaskSummary() {
    const total = 5
    const completadas = 4
  return <section className="task-hint">
    <p>Total de tareas: {total}</p>
    <p>Completadas: {completadas}</p>
    <p>Pendientes: {total - completadas}</p>
  </section>;
}

// Se debe escribir "export default" para que el componente pueda ser importado en otro archivo.