import { Component } from '@angular/core';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {

  pageLogin: boolean = true;

  ocultarLogin(){
    this.pageLogin = false;
    //console.log('Hola componente hijo');
  }

}


