import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";


const routes: Routes = [{
  path: '',
  component: AdminComponent,
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
export class AdminRoutingModule {
}
