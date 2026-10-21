export default function TaskItem() {
    const titulo = 'Hacer PR';
  return <article className="task-item"> 
        <h2>{titulo}</h2>
        <p>Pendiente</p>
    </article>;
}

// Se debe escribir "export default" para que el componente pueda ser importado en otro archivo.