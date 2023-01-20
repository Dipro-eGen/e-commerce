import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthRoleGuard} from '../../common/service/auth-role-guard.service';
import {EmployeeResourceAccessComponent} from './employee-resource-access/employee-resource-access.component';
import {EmployeeGridComponent} from './employee-grid/employee-grid.component';
import {EmployeeSetupComponent} from './employee-setup/employee-setup.component';
import {HrComponent} from './hr.component';
import {EmployeeRoleSaveGridComp} from "./employee_role_save_grid/EmployeeRoleSaveGridComp";
import {EmployeeProfileComp} from "./employee_profile/EmployeeProfileComp";

const routes: Routes = [{
  path: '',
  component: HrComponent,
  children: [
    {
      path: 'employee-setup',
      component: EmployeeSetupComponent,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-setup']}
    },
    {
      path: 'employee-setup/:id',
      component: EmployeeSetupComponent,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-setup']}
    },
    {
      path: 'employee-grid',
      component: EmployeeGridComponent,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-setup']}
    },
    {
      path: 'employee-resource-access',
      component: EmployeeResourceAccessComponent,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-resource-access']}
    },
    {
      path: 'employee-role',
      component: EmployeeRoleSaveGridComp,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-role']}
    },
    {
      path: 'employee-profile',
      component: EmployeeProfileComp,
      canActivate: [AuthRoleGuard],
      data: {roles: ['employee-role']}
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {
}
