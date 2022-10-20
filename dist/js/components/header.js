import { Component } from './component.js';
import { Menu } from './menu.js';
export class Header extends Component {
    constructor(selector) {
        //cuando se instanciamos le decimos el selector
        //pasar selector al padre
        super();
        this.selector = selector;
        this.template = this.createTemplate(); //construyo el template.
        this.renderAdd(this.selector, this.template); //lo renderizo
        new Menu('slot');
    }
    //crear metodo template
    createTemplate() {
        return `
        <header>
        <h1>TO-DO LIST</h1>
        <slot></slot>
        </header>
        `;
    }
}
