//modelar una entidad
//modelo de datos es una clase
//con clases
export class Task {
    constructor(title, responsible) {
        this.title = title;
        this.responsible = responsible;
        this.isCompleted;
        false;
    }
}
//array de tareas, 2 maneras:
export const tastks = [
    new Task("estudiar", "ernesto"),
    new Task("dormir", "pepe"),
    new Task("ir al parque", "elena"),
];
//si no exoste la clase y solo tengo el interfaz, se crean objetos con llaves
// clase new
// interface literal
const tasks2 = [
    { title: "dormir", responsible: "pepe", isCompleted: false }
];
