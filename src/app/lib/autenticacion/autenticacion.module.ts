import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../autenticacion/login/LoginComponent';
import { SignupComponent } from './signup/signup.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    LoginComponent,
    AutenticacionComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    LoginComponent,
    AutenticacionComponent,
    SignupComponent
  ]
})
export class AutenticacionModule { }

