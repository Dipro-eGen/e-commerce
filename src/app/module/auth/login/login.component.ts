import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../../../dto/login-dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  warningAlert: boolean = false;
  loginFg: FormGroup = this.fb.group({
    email: [null, Validators.required],
    password: [null,Validators.required],
  });
  constructor(private router: Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  goToDashboard() {
    this.router.navigateByUrl('/user/dashboard');
  }

  goToAdminPanel() {
    this.router.navigateByUrl('/admin/panel');
 /*   const userInput: LoginDto = new LoginDto({
      email: this.loginFg.value['email'],
      password: this.loginFg.value['password'],
    });
    if(this.hasAccess(userInput)){
      localStorage.setItem("isLoggedIn","true");
      this.router.navigateByUrl('/admin/panel');
    }
    else {
      this.warningAlert = true;
    }*/
  }

  hasAccess(userInput: LoginDto):boolean{
    return userInput.email === "admin@gmail.com" && userInput.password === "@dmin1234";
  }

  close() {
    this.warningAlert = false;
  }
}
