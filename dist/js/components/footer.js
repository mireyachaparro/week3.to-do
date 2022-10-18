import { Component } from './component.js';
export class Footer extends Component {
    constructor(selector) {
        //cuando se instanciamos le decimos el selector.
        //pasar selector al padre
        super();
        this.selector = selector;
        this.template = this.createTemplate(); //construyo el template
        this.renderAdd(this.selector, this.template); //lo renderizo
    }
    //crear metodo template
    createTemplate() {
        return `
        <footer><address>Mireya</address></footer>
        `;
    }
}
