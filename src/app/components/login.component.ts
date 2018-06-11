import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
    selector: 'login',
    templateUrl: '../views/login.html',
	providers: [ProductoService]
})
export class LoginComponent {
    public usuario: string;
    public pass: string;
    public msgError: string;
    public nouser: boolean;
    public nopass: boolean;
    public nologin: boolean;

    constructor(private router: Router, 
        private _productoService: ProductoService) {
        this.usuario = '';
        this.pass = '';
        this.msgError = '';
        this.nouser = false;
        this.nopass = false;
        this.nologin = false;
    }

    login() {
        this.nopass = false;
        this.nouser = false;
        let usuTrue, passTrue;

        this.usuario === '' || this.usuario === undefined ? usuTrue = false : usuTrue = true;
        this.pass === '' || this.pass === undefined ? passTrue = false : passTrue = true;


        if (usuTrue && passTrue) {
            this._productoService.getUser(this.usuario).subscribe(
                response => {
                    if (response.status === 'success') {
                        if (response.data.pass === this.pass) {
                            location.href=location.href;
                            sessionStorage.setItem('usu', this.usuario);                           
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
        this.router.navigate(['/home']); 
    }

}





