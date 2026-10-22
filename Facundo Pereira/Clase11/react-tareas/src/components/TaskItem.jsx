export default function TaskItem({task, label = "Tarea"}) {
    return (
        <div>
            <p>{label}: {task.title}</p>
        </div>
    );
}