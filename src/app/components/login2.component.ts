import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'login2',
    templateUrl: '../views/login2.html'
})
export class Login2Component {
    public usuarioMo: string;
    public passMo: string;
    public usuario: string;
    public pass: string;
    public nologin: boolean;

    constructor(private router: Router) {
        this.nologin = false;
        this.usuarioMo = 'admin';
        this.passMo = 'admin';
        this.usuario = '';
        this.pass = '';
    }

    login () {
        if (this.usuarioMo === this.usuario && this.passMo === this.pass) {
            this.router.navigate(['/productos']);
        } else {
            this.nologin = true;
        }
    }
}





