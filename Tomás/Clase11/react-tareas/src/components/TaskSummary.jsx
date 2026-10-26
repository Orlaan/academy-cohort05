export default function TaskSummary({ tasks }) {
    const total = tasks.length;
    const hechas = 
    tasks.filter((t) => t.completed).length;
    return <p>{hechas} hechas de {total} tareas</p>
}