import Titulos from "./TaskHeader";
import Footer from "./Footer";
import ListaTareas from "./TaskList";
import Panel from "./Panel";

export default function PaginaTareas({ tasks }) {
  return (
    <div className="pagina">
      <Titulos title = "Mentoría Full Stack" subtitle = "Mis Tareas" />

      <div className="panels">
        <Panel title="Listado de Tareas">
          <ListaTareas tasks={tasks} />
        </Panel>

        <Panel title="Indicaciones de Uso">
          <p>Cada tarea muestra su etiqueta y su título. Las urgentes aparecen como "Urgente".</p>
        </Panel>
      </div>
      
      <Footer />
    </div>
  );
}