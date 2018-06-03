import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})
export class HomeComponent{
    public titulo: string;

    constructor(){
        this.titulo = "Webapp para ver los coches que tenemos en stock y añadir nuevos";
    }
    ngOnInitç(){
        console.log('Se ha cargado home.component.ts');
    }
}
