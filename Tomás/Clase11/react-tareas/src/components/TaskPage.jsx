import Titulos from "./TaskHeader";
import Footer from "./Footer";
import ListaTareas from "./TaskList";
import Panel from "./Panel";

export default function PaginaTareas({ tasks, titulo, subtitulo, conAyuda }) {
  return (
    <div className="pagina">
      <Titulos title={titulo} subtitle={subtitulo} />

      <div className="panels">
        <Panel title="Listado de Tareas">
          <ListaTareas tasks={tasks} />
        </Panel>

        {conAyuda && (
          <Panel title="Indicaciones de Uso">
          <p>Cada tarea muestra su etiqueta y su título. Las urgentes aparecen como "Urgente".</p>
          </Panel>
        )}
      </div>
      
      <Footer />
    </div>
  );
}


//Predicción del ejercicio en Consola:
//
//#0: No se ejecuta TaskHeader, No cambia el DOM.
//#1: Si se ejecuta TaskHeader, Si cambia el DOM.
//#2: Si se ejecuta TaskHeader, No cambia el DOM.
//#3: No se ejecuta TaskHeader, No cambia el DOM.
//#4: Si se ejecuta TaskHeader, Si cambia el DOM.
//#5: Si se ejecuta TaskHeader, Si cambia el DOM.
//
//Resultado: Todo tal cual lo predicho.