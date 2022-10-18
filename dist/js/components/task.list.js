import { tasks } from '../models/data.js';
import { Task } from '../models/task.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.tasks = [...tasks];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddTask('slot#add-task');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this)); //cuanndo una callback empieza por this, termina por .bind(this)
            //document.querySelectorAll('.eraser'); //devuelve todas las papeleras, una lista, las listas no tienen eventlistener pero tienen foreach
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handleEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
        <h2>Tareas</h2>
        <slot id="add-task"></slot>
        <ul>`;
        this.tasks.forEach((item) => {
            template += `<li>${item.id} - ${item.title} - ${item.responsible}<span class ="eraser" data-id="${item.id}">🗑️</span></li>`;
        });
        template += `</ul>
        </section>`;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const title = document.querySelector('#title')
            .value;
        const responsible = document.querySelector('#responsible').value;
        this.tasks.push(new Task(title, responsible));
        this.manageComponent();
    }
    handleEraser(ev) {
        const deleteId = ev.target.dataset.id;
        this.tasks = this.tasks.filter((item) => item.id != +deleteId);
        this.manageComponent();
    }
}
