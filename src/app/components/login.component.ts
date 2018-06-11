import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
    selector: 'login',
    templateUrl: '../views/login.html'
})
export class LoginComponent {
    private _productoService: ProductoService;
    public usuario: string;
    public pass: string;
    public msgError: string;
    public nouser: boolean;
    public nopass: boolean;
    public nologin: boolean;

    constructor(private router: Router) {
        this.usuario = '';
        this.pass = '';
        this.msgError = '';
        this.nouser = false;
        this.nopass = false;
        this.nologin = false;
    }

    login() {
        let usuTrue, passTrue;

        this.usuario === '' || this.usuario === undefined ? usuTrue = false : usuTrue = true;
        this.pass === '' || this.pass === undefined ? passTrue = false : passTrue = true;


        if (usuTrue && passTrue) {
            console.log('aa');
            this._productoService.getProducto(this.usuario).subscribe(
                response => {
                    if (response.status === 'success') {
                        if (response.data.pass === this.pass) {
                            this.router.navigate(['/crear-producto']);
                        } else {
                            this.nopass = true;
                        }
                    } else {
                        this.nouser = true;
                    }
                },
                error => {
                    this.nouser = true;
                }
            );

        } else {
            this.nologin = true;
        }
    }

    registrar() {
        this.router.navigate(['/registrar']);
    }
}





