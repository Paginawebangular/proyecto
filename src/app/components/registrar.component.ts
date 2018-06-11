import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
    selector: 'registrar',
    templateUrl: '../views/registrar.html'
})
export class RegistrarComponent {
    private _productoService: ProductoService;
    public usuario: string;
    public pass: string;
    public name: string;
    public msgError: string;
    public nologin: boolean;
    public norellene: boolean;

    constructor(private router: Router) {
        this.usuario = '';
        this.pass = '';
        this.name = '';
        this.msgError = '';
        this.nologin = false;
        this.norellene = false;
    }

    registrar() {
        let usuTrue, passTrue, nameTrue;

        this.usuario === '' || this.usuario === undefined ? usuTrue = false : usuTrue = true;
        this.pass === '' || this.pass === undefined ? passTrue = false : passTrue = true;
        this.name === '' || this.name === undefined ? nameTrue = false : nameTrue = true;


        if (usuTrue && passTrue && nameTrue) {
            const body = {
                'user': this.usuario,
                'pass': this.pass,
                'nombre': this.name
            };
           
            this._productoService.newUser(body).subscribe(
                response => {
                    
                    if (response.status === 'success') {
                     this.router.navigate(['/crear-producto']);
                    } else {
                        this.nologin = true;
                    }
                },
                error => {
                    this.nologin = true;
                  
                }
            );

        } else {
            this.norellene = true;
        }
    }

    atras() {
        this.router.navigate(['/login']);
    }
}





