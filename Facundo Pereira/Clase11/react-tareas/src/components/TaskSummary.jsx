export default function TaskSummary({ tasks }) {
    //reduce -> contar las tareas completas
    const totalCompletas = tasks.reduce((contador, task) => task.completed ? contador + 1 : contador, 0);

    const totalPendientes = tasks.length - totalCompletas;

    // some -> Comprobar si existe al menos una tarea pendiente
    const hayPendientes = tasks.some((task) => !task.completed);

    //every -> Comprobar si todas las tareas estan completas
    const todasCompletas = tasks.every((task) => task.completed);

    //find -> Encontrar la primera tarea pendiente
    const primeraPendiente = tasks.find((task) => !task.completed);

    //map -> Obtener un array con los titulos
    const titulos = tasks.map((task) => task.title);


    return (
        <div>
            <p>Total de tareas: {tasks.length}</p>
            <p>Completas: {totalCompletas}</p>
            <p>Pendientes: {totalPendientes}</p>
            <p>
                ¿Hay tareas pendientes? {hayPendientes ? "Sí" : "No"}
            </p>
            <p>
                ¿Están todas completas? {todasCompletas ? "Sí" : "No"}
            </p>
            <p>
                Primera pendiente: {primeraPendiente
                    ? primeraPendiente.title
                    : "No hay tareas pendientes"}
            </p>
            <p>Títulos: {titulos.join(", ")}</p>
        </div>
    );
}