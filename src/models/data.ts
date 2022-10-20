import { Task } from './task.js';

export const tasks: Array<Task> = [
    //tengo una tarea y la he creado con la clase tareas
    new Task('estudiar', 'ernesto'),
    new Task('dormir', 'pepe'),
    new Task('ir al parque', 'elena'),
];

tasks[0].isCompleted = true;
