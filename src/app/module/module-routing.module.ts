 import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleComponent} from './module.component';


const routes: Routes = [
  { path: '', component: ModuleComponent,
    children: [
            {path: '', loadChildren: () => import('./auth/auth.module')
          .then(m => m.AuthModule)},

            {path: 'admin', loadChildren: () => import('./admin/admin.module')
          .then(m => m.AdminModule) },

            {path: 'dashboard', loadChildren: () => import('./general-user/general-user.module')
          .then(m => m.GeneralUserModule)},

/*      {path: '', loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule) , canActivate: [AuthenticateOnly] },*/

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
