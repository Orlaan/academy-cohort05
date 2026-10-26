export default function TaskSummary({ tasks }) {
    const completadas = tasks.filter(
        (task) => task.completed
    ).length;

    const restantes = tasks.length - completadas;

    return (
        <div>
            <p>Completadas: {completadas}</p>
            <p>Restantes: {restantes}</p>
        </div>
    );
}