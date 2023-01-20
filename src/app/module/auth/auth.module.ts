import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AuthService} from "./auth-services/auth-service";
import {AuthGuard} from "../../auth.guard";



@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AuthRoutingModule,
    NgbAlertModule,
  ],
  providers:[AuthService,AuthGuard]
})
export class AuthModule { }
