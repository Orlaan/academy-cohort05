import TaskPage from "./components/TaskPage"

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
  return <TaskPage tasks = {tasks} />
};
