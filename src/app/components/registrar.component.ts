import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Usuario } from '../models/usuario';

@Component({
    selector: 'registrar',
    templateUrl: '../views/registrar.html',
	providers: [ProductoService]
})
export class RegistrarComponent {
    public usuario: Usuario;
    public msgError: string;
    public nologin: boolean;
    public norellene: boolean;

    constructor(private router: Router,
        private _productoService: ProductoService) {
        this.usuario = new Usuario('','','');
        this.msgError = '';
        this.nologin = false;
        this.norellene = false;
    }

    registrar() {
        this.nologin = false;
        let usuTrue, passTrue, nameTrue;

        this.usuario.user === '' || this.usuario.user === undefined ? usuTrue = false : usuTrue = true;
        this.usuario.pass === '' || this.usuario.pass === undefined ? passTrue = false : passTrue = true;
        this.usuario.nombre === '' || this.usuario.nombre === undefined ? nameTrue = false : nameTrue = true;


        if (usuTrue && passTrue && nameTrue) {
            this._productoService.newUser(this.usuario).subscribe(
                response => {
                    
                    if (response.status === 'success') {
                        sessionStorage.setItem('usu', this.usuario.user);
                     this.router.navigate(['/home']);
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





