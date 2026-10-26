# React Tareas

Lista de tareas hecha con React y Vite para la Mentoría Full Stack (Módulo 3).

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

Desde la carpeta del proyecto:

    cd react-tareas
    npm install

## Levantar el proyecto

    npm run dev

Después abrí http://localhost:5173 en el navegador.

## Probar con distintas cantidades de tareas

En src/data/tasks.js hay tres listas: tasks (tareas propias), sinTareas (0) y muchasTareas (20).
Para cambiar de escenario, se modifica solo el import en src/App.jsx:

    import { tasks } from "./data/tasks";
    // import { sinTareas as tasks } from "./data/tasks";
    // import { muchasTareas as tasks } from "./data/tasks";