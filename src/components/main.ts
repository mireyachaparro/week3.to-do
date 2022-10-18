import { Component } from './component.js';

export class Main extends Component {
    //segundo componente: main
    template: string;
    constructor(public selector: string) {
        //cuando se instanciamos le decimos el selector.
        //pasar selector al padre
        super();
        this.template = this.createTemplate(); //construyo el template
        this.renderAdd(this.selector, this.template); //lo renderizo
    }
    //crear metodo template
    createTemplate() {
        return `
        <main>
        </main>
        `;
    }
}
