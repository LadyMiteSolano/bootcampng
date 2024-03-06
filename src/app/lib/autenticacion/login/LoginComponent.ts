import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  @Output()
  evento = new EventEmitter<any>();

  useremailPredeterminado = 'lady@gmail.com';
  passUserPredeterminado = '1234';
  mensajelogin = '';

  emailUser: string = '';
  password: string = '';
  tituloform: string = 'titulo de form';

  /*saludar = () =>{
    this.mensajelogin = 'Bienvenido user:'+ this.emailUser;
  }*/
  login() {
    if (this.emailUser === this.useremailPredeterminado) {
      if (this.password === this.passUserPredeterminado) {
        this.mensajelogin = 'ACCESO EXITOSO';
      } else {
        this.mensajelogin = 'CONTRASEÑA INCORRECTA';
      }
    } else {
      this.mensajelogin = 'USUARIO NO SE ENCUENTRS REGISTRADO';
    }
  }

  cambioRegistro(){
    this.evento.emit();
  }
}
