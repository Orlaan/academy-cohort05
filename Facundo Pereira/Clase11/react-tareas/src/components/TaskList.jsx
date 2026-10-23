import TaskItem from "./TaskItem"

export default function TaskList({ tasks }) {
    return (
        <div>
            <TaskItem task={tasks[0]} />
            <TaskItem task={tasks[1]} label = "Urgente" />
            <TaskItem task={tasks[2]} />
        </div>
    );
}