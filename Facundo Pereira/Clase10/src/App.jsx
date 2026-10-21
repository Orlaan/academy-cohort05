import Prediction from './Prediction.jsx';
import Welcome from './Welcome.jsx';
import TaskHeader from './TaskHeader.jsx'
import TaskItem from './TaskItem.jsx'


export default function App() {
  return (
    <main className="task-board">
      <Prediction/>
      <Welcome/>
      <TaskHeader/>
      <TaskItem/>
    </main>
  );
}
