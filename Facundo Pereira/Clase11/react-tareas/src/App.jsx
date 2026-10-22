import TaskHeader from './components/TaskHeader';
import TaskItem from './components/TaskItem';
import Footer from './components/Footer';

const tasks = [
  {
    id: 0,
    title: "Preparar la demo",
    completed: false
  }, {
    id: 1,
    title: "Revisar el PR",
    completed: false
  }, {
    id: 2,
    title: "Leer sobre props",
    completed: false
  },

]

export default function App() {
  return (
    <div>
      <TaskHeader title="Mis Tareas Facu" subtitle="" />
      <TaskItem task={tasks[0]} />
      <TaskItem task={tasks[1]} label="Urgente" />
      <TaskItem task={tasks[2]} />
      <Footer />
    </div>
  );
}