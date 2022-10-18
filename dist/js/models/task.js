export class Task {
    constructor(title, responsible) {
        this.title = title;
        this.responsible = responsible;
        this.id = Task.createId();
        this.isCompleted;
        false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000); //para que no tenga comas
    }
}
