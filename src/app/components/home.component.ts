import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})
export class HomeComponent{
    public titulo: string;

    
    constructor() {
        this.titulo = "Bienvenido a Concesionario Rodríguez, la mejor web para encontrar tu coche ideal al mejor precio.";
    }
    ngOnInit () {
        console.log('Se ha cargado home.component.ts');
    }
}
