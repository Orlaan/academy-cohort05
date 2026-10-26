import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    )
}