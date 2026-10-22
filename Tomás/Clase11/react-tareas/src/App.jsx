import Titulos from "./components/TaskHeader";
import Tareas from "./components/TaskItem";
import Footer from "./components/Footer";

const tasks = [
  {
  id: 1,
  title: "Hacer los ejercicios",
  completed: true
}, {
  id: 2,
  title: "Hacer PR",
  completed: false
}, {
  id: 3,
  title: "Review del PR de Facu",
  completed: false
}]

export default function App() {
  return (
    <>
      <Titulos title = "Mentoría Full Stack" subtitle = "Mis Tareas" />
      <Tareas task={tasks[0]} />
      <Tareas task={tasks[1]} label="Urgente"/>
      <Tareas task={tasks[2]}/>
      <Footer />
    </>
  );
}