import { Component } from './component.js';

export class AddTask extends Component {
    //segundo componente: main
    template: string;
    constructor(public selector: string) {
        //cuando se instanciamos le decimos el selector.
        //pasar selector al padre
        super();
        this.template = this.createTemplate(); //construyo el template
        this.renderOuter(this.selector, this.template); //lo renderizo
    }
    //crear metodo template
    createTemplate() {
        return `
        <form>
            <div>
                <input
                    type="text"
                    id="title"
                    placeholder="Título de la tarea"
                    required
                />
            </div>
            <div>
                <input type="text" id="responsible" placeholder="Responsable" />
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
