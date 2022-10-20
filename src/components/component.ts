export abstract class Component {
    //es una clase abstracta, header y footer son hijos de las clase Component. los componentes reales son header y foote
    //no tiene constructor porque los parametros se los pasamos por el metodo render
    //es un contenedor con los metodos commpartidos con los hijos
    render(selector: string, template: string) {
        //pinta dentro
        if (!selector) return false;
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null) return false; //si es null, que no haga nada
        element.innerHTML = template; //qué voy a pintar
        return true;
    }
    renderAdd(selector: string, template: string) {
        //pinta dentro
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada.
        element.innerHTML += template; //qué voy a pintar
        return true;
    }
    renderOuter(selector: string, template: string) {
        //pinta encima
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada
        element.outerHTML = template; //qué voy a pintar
        return true;
    }
}

export interface IComponent {
    //esto no se debe guardar aqui!!!!!!
    createTemplate: () => string;
    manageComponent: () => void;
}
