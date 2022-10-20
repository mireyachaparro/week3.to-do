import { Component, IComponent } from './component.js';
interface IMenuOptions {
    path: string;
    label: string;
}

export class Menu extends Component implements IComponent {
    //esto es para importar desde la interfaz (component.ts) los metodos managecomponent y createtemplate
    template!: string; //como la vamos a utilizar aqui mismo, la ponemos aqui
    menuOptions: Array<IMenuOptions>;
    constructor(public selector: string) {
        //porque en index solo le pasamos el selector ddonde queremos que se pinte
        //cuando se instanciamos le decimos el selector
        //pasar selector al padre
        super();
        this.menuOptions = [
            { path: '', label: 'Inicio' },
            { path: '', label: 'Tareas' },
            { path: '', label: 'Nosotros' },
        ];
        this.manageComponent;
    }
    createTemplate() {
        let template = '<nav><ul>';
        this.menuOptions.forEach(
            (item: IMenuOptions) =>
                (template += `<li><a href="${item.path}">${item.label}</a></li>`)
        );
        template += '</ul></nav>';
        return template;
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
}
