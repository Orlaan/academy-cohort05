import Tareas from "./TaskItem";

export default function ListaTareas({ tasks}) {
    return (
        <>
            <Tareas task={tasks[0]} />
            <Tareas task={tasks[1]} label="Urgente"/>
            <Tareas task={tasks[2]}/>
        </>
    )
}