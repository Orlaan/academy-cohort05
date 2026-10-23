import TaskHeader from "./TaskHeader"
import Panel from "./Panel"
import TaskList from "./TaskList";

export default function TaskPage({tasks}){
    return(
        <div>
            <TaskHeader title="Mis tareas" subtitle =""/>

            <div className="task-page-layout">
                <Panel title="Listado">
                    <TaskList tasks={tasks}/>
                </Panel>

                <Panel title="Indicaciones de uso">
                   <p>Revisa las tareas pendientes y comenza por la que consideres mas importante</p>
                </Panel>
            </div>
        </div>
    );
}