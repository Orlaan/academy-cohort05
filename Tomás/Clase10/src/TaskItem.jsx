export default function TaskItem() {
    const titulo = 'Hacer ejercicios 5 y 6 de la clase 10';
  return <article className="task-item"> 
        <h2>{titulo}</h2>
        <p>Pendiente</p>
    </article>;
}

// Se debe escribir "export default" para que el componente pueda ser importado en otro archivo.