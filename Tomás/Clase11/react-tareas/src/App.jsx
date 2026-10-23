import "./App.css";
import PaginaTareas from "./components/TaskPage";

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
  return <PaginaTareas tasks={tasks} />;
}