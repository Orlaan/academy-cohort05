import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(
  document.getElementById('root'));


function mostrar(props = {}) {
  root.render(
    <StrictMode>
      <App {...props} />
    </StrictMode>,
  );
}

// Sin StrictMode, el contador impuro muestra #1 al cargar y parece funcionar bien, pero sigue sumando en cada render (#2, #3...). Con StrictMode, React ejecuta cada componente dos veces en desarrollo, así que el error aparece enseguida (#2 al cargar). Conviene dejarlo puesto porque detecta componentes impuros antes de que el bug llegue más lejos, y en producción no se ejecuta dos veces, así que no afecta el rendimiento.

mostrar();
window.mostrar = mostrar;