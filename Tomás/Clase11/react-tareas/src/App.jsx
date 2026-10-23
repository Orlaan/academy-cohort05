import "./App.css";
import PaginaTareas from "./components/TaskPage";

const tasks = [
  { id: 1, title: "Hacer los ejercicios", completed: true },
  { id: 2, title: "Hacer PR", completed: false },
  { id: 3, title: "Review del PR de Facu", completed: false }
];

export default function App({ titulo = "Mis tareas", subtitulo = "Tomás Fernández", conAyuda = true }) {
  return <PaginaTareas tasks={tasks} titulo={titulo} subtitulo={subtitulo} conAyuda={conAyuda} />;
}