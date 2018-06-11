import { Component } from '@angular/core';
import { GLOBAL } from './services/global';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'CONCESIONARIO RODRIGUEZ';
  public header_color: string;
  public persona;
  public esUsuario;
  public esAdmin;

  constructor(private router: Router) {
    this.persona = sessionStorage.getItem('usu');
    this.header_color = GLOBAL.header_color;
    this.esUsuario = false;
    this.esAdmin = false;
  }

  ngOnInit() {
    this.comprobarLogado();
  }

  comprobarLogado() {
    if (this.persona === undefined || this.persona === '' || this.persona === null) {
      sessionStorage.setItem('puede', 'n');
      this.esUsuario = false;
      this.esAdmin = false;      
    } else {
      if (this.persona === 'admin') {
        this.esUsuario = true;
        this.esAdmin = true;
        sessionStorage.setItem('puede', 's');
      } else {
        sessionStorage.setItem('puede', 's');
        this.esUsuario = true;
        this.esAdmin = false;
      }

    }
  }

  cerrar() {
    sessionStorage.removeItem('usu');
    sessionStorage.setItem('puede', 'n');
    location.href = location.href;
    this.router.navigate(['/home']);
  }
}

