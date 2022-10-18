export abstract class Component {
    //es una clase abstracta, header y footer son hijos de las clase Component. los componentes reales son header y foote
    //no tiene constructor porque los parametros se los pasamos por el metodo render
    //es un contenedor con los metodos commpartidos con los hijos
    render(selector: string, template: string) {
        //pinta dentro
        const element = document.querySelector(this.selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada
        element.innerHTML = this.template; //qué voy a pintar
        return true;
    }
    renderAdd(selector: string, template: string) {
        //pinta dentro
        const element = document.querySelector(this.selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada.
        element.innerHTML += this.template; //qué voy a pintar
        return true;
    }
    renderOuter(selector: string, template: string) {
        //pinta encima
        const element = document.querySelector(this.selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada
        element.outerHTML = this.template; //qué voy a pintar
        return true;
    }
}
