import TaskHeader from './TaskHeader.jsx'
import TaskItem from './TaskItem.jsx'
import TaskSummary from './TaskSummary.jsx';


export default function TaskBoard() {
    return <section className = "task-board">
        <TaskHeader />
        <TaskItem />
        <TaskItem />
        <TaskSummary />
    </section>;
}
