import { Task } from '../models/task.js';
import { Component } from './component.js';

export class ItemTask extends Component {
    template!: string;
    constructor(
        public selector: string,
        public item: Task,
        public handleDelete: (id: number) => void,
        public handleChange: (id: number) => void
    ) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        setTimeout(() => {
            (document.querySelector(`#i${this.item.id}`) as HTMLElement) //cuando le clicas al boton de la papelera, se ejecuta la callback handleDelete (arriba, porque se la pide al padre que es la clase itemtask)
                .addEventListener('click', () => {
                    this.handleDelete(this.item.id);
                });
            (document.querySelector(`#ch${this.item.id}`) as HTMLElement) //cuando le clicas a un checkbox, se ejecuta la callback
                .addEventListener('change', () => {
                    this.handleChange(this.item.id);
                });
        }, 100);
    }

    createTemplate() {
        return `
        <li><input id="ch${this.item.id}" type="checkbox" ${
            this.item.isCompleted ? 'checked' : ''
        }>
            <span>${this.item.id}<span>
            <span>${this.item.title}<span>
            <span class="button" id="i${this.item.id}" data-id="${
            this.item.id
        }">🗑️</span>
        </li>`;
    }
}
