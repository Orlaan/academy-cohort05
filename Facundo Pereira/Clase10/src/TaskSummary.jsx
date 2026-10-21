export default function TaskSummary() {
    const total = 5;
    const completadas = 2;
    return <section className= "task-hint">
        <h2>Tareas:</h2>
        <p>Total de tareas: {total}</p>
        <p>Tareas completadas: {completadas}</p>
        <p>Tareas pendientes: {total - completadas}</p>
    </section>;
}
