import TaskHeader from './TaskHeader.jsx';
import TaskItem from './TaskItem.jsx';
import TaskSummary from './TaskSummary.jsx';

export default function TaskBoard() {
  return <section>
    <TaskHeader />
    <TaskItem />
    <TaskItem />
    <TaskSummary />
  </section>;
}

// Se debe escribir "export default" para que el componente pueda ser importado en otro archivo.