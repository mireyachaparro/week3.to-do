//modelar una entidad
//modelo de datos es una clase

//con clases

export class Task { //todas las tareas inicialmente estan en incompletas, como no quiero que se decida el valor desde fuera, sino desde dentro, cuando se crea una nueva tarea, iscompleted vale false
    public isCompleted: boolean
    constructor(
        public title: string,
        public responsible: string,
        
    ) {this.isCompleted: false}
}
//array de tareas, 2 maneras:
export const tastks: Array<Task> = [ //tengo una tarea y la he creado con la clase tareas
    new Task("estudiar", "ernesto"),
    new Task("dormir", "pepe"),
    new Task("ir al parque", "elena"),
]

//con interface:

export interface ITask {
    //interfaz
    title: string;
    responsible: string;
    isCompleted: boolean;
}
//si no exoste la clase y solo tengo el interfaz, se crean objetos con llaves
// clase new
// interface literal
const tasks2: ITask[] = [
    {title: "dormir", responsible: "pepe", isCompleted: false}
]