export const tasks = [
  { id: 1, title: "Hacer los ejercicios", completed: true },
  { id: 2, title: "Hacer PR", completed: false },
  { id: 3, title: "Review del PR de Facu", completed: false },
  { id: 4, title: "Hacer algo", completed: true }
];

export const noTasks = [];

export const arrayTasks = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, title: `Tarea ${i + 1}`, completed: i % 3 === 0}));