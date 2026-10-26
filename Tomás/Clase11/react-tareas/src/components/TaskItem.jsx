export default function TaskItem({ task, label = "Tarea" }) {
  return (
    <>
        <p style={{ textDecoration: task.completed ? "line-through" : "none"}}>{label}: {task.title}</p>
    </>
  );
}