import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterproviderComponent } from './registerprovider/registerprovider.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginasadminComponent } from './loginasadmin/loginasadmin.component';
import { HometestComponent } from './hometest/hometest.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, RegisterproviderComponent, ForgotpasswordComponent, LoginasadminComponent, HometestComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
