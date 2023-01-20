import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login.component";


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
 /*   {
      path: 'employee-setup',
      component: EmployeeSetupComponent,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-setup']}
    },*/

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
}
