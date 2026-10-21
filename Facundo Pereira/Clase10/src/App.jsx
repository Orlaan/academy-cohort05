import Prediction from './Prediction.jsx';
import Welcome from './Welcome.jsx';
import TaskBoard from './TaskBoard.jsx';


export default function App() {
  return (
    <main className="task-board">
      <Prediction/>
      <Welcome/>
      <TaskBoard/>
    </main>
  );
}
