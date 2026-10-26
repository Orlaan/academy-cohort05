export const tasks = Array.from(
    { length: 20 },
    (_, i) => ({
        id: i + 1,
        title: `Tarea ${i + 1}`,
        completed: i % 3 === 0
    })
);