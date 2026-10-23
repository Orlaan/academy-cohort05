import TaskHeader from "./TaskHeader"
import Panel from "./Panel"
import TaskList from "./TaskList";

export default function TaskPage({tasks, titulo, conAyuda}){
    return(
        <div>
            <TaskHeader title={titulo} subtitle =""/>

            <div className="task-page-layout">
                <Panel title="Listado">
                    <TaskList tasks={tasks}/>
                </Panel>
                {conAyuda && (
                <Panel title="Indicaciones de uso">
                   <p>Revisa las tareas pendientes y comenza por la que consideres mas importante</p>
                </Panel>
                )}
            </div>
        </div>
    );
}