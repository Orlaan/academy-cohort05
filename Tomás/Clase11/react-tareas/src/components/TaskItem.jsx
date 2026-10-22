export default function Tareas({ task, label = "Tarea" }) {
  return (
    <>
        <p>{label}: {task.title}</p>
    </>
  );
}