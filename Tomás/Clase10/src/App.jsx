// import Prediction from './Prediction.jsx';

// import Welcome from './Welcome.jsx';

import TaskHeader from './TaskHeader.jsx';

import TaskItem from './TaskItem.jsx';

export default function App() {
  return (
    <main className="task-board">
      <h1>Clase 10: primeros components</h1>
      <p>Abrí ejercicios/README.md para empezar.</p>
      {/* <h2>Ejercicio Prediction</h2>
      <Prediction />
      <h2>Ejercicio Welcome</h2>
      <Welcome /> */}
      <h2>Ejercicio TaskHeader</h2>
      <TaskHeader />
      <h2>Ejercicio TaskItem</h2>
      <TaskItem />
    </main>
  );
}
