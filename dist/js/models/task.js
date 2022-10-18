export class Task {
    constructor(id = this.createId()) { this.isCompleted; false; }
    static createId() {
        return Math.round(Math.random() * 1000000); //para que no tenga comas
    }
}
