export interface ITask {
    //interfaz
    title: string;
    responsible: string;
    isCompleted: boolean;
}

export class Task { //todas las tareas inicialmente estan en incompletas, como no quiero que se decida el valor desde fuera, sino desde dentro, cuando se crea una nueva tarea, iscompleted vale false
    id: number;
    isCompleted: boolean;
    static createId(){
    return Math.round(Math.random()*1_000_000); //para que no tenga comas
}
    constructor(public title: string, public responsible: string){
        this.id = Task.createId()
        this.isCompleted: false
    }
}
