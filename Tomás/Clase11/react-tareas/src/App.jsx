import "./App.css";
import PaginaTareas from "./components/TaskPage";
// import { tasks } from "./data/tasks";  // tareas de antes
// import { noTasks as tasks } from "./data/tasks"; // sin tareas
import { arrayTasks as tasks } from "./data/tasks";  // array de 20 tareas

export default function App({ titulo = "Mis tareas", subtitulo = "Tomás Fernández", conAyuda = true }) {
  return <PaginaTareas tasks={tasks} titulo={titulo} subtitulo={subtitulo} conAyuda={conAyuda} />;
}