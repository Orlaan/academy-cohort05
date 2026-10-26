import TaskPage from "./components/TaskPage"
import { tasks } from "./data/tasks";

export default function App({titulo = 'Mis tareas', conAyuda = true}) {
  return <TaskPage tasks = {tasks} titulo = {titulo} conAyuda = {conAyuda} />
};
