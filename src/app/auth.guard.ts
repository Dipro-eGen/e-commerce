import { Injectable } from '@angular/core';
import {CanActivate, Router, Routes} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./module/auth/auth-services/auth-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate():boolean{
    if (this.authService.loggedIn()){
      return true;
    }
    else {
      this.router.navigate([""])
      return false;
    }
  }



}
