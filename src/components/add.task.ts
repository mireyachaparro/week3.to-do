import { Component } from './component.js';

export class AddTask extends Component {
    //segundo componente: main
    template: string;
    constructor(public selector: string, public handle: (ev: Event) => void) {
        //funcion void
        //cuando se instanciamos le decimos el selector.
        //pasar selector al padre
        super();
        this.template = this.createTemplate(); //construyo el template
        this.renderOuter(this.selector, this.template); //lo renderizo
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    console.log('tengo q añadir');
                    handle(ev);
                });
        }, 100);
        //cuanndo una callback empieza por this, termina por .bind(this)
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
