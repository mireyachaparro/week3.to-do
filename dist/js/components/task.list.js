import { tasks } from '../models/data.js';
import { Task } from '../models/task.js';
import { Store } from '../Services/storage.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
import { ItemTask } from './item-task.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Store('Task'); //lo instanciamos y le damos el tipo task
        if (this.storeService.getStore().length === 0) {
            this.tasks = [...tasks];
            this.storeService.setStore(this.tasks);
        }
        else {
            this.tasks = this.storeService.getStore();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddTask('slot#add-task', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.tasks.forEach((item) => {
            template += new ItemTask('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        // ev.preventDefault();
        const title = document.querySelector('#title')
            .value;
        const responsible = document.querySelector('#resp').value;
        this.tasks.push(new Task(title, responsible));
        this.manageComponent();
    }
    handlerEraser(deletedID) {
        this.tasks = this.tasks.filter((item) => item.id !== deletedID);
        this.manageComponent();
    }
    handlerComplete(completedID) {
        const i = this.tasks.findIndex((item) => item.id === completedID);
        this.tasks[i].isCompleted = !this.tasks[i].isCompleted;
        console.log(this.tasks);
    }
}
