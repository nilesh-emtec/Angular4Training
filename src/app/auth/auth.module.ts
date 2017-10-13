import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth.routing.module';



@NgModule({
  imports: [AuthRoutingModule],
  exports: [],
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  providers: [],
})
export class AuthModule { }
