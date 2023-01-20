 import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticateOnly} from '../common/service/auth_guard/AuthenticateOnly';
import {ModuleComponent} from './module.component';


const routes: Routes = [
  { path: '', component: ModuleComponent,
    children: [
      {path: '', loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule) , canActivate: [AuthenticateOnly] },

      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule) , canActivate: [AuthenticateOnly] },

      {path: 'registration', loadChildren: () => import('./registration/registration.module')
          .then(m => m.RegistrationModule) , canActivate: [AuthenticateOnly] },

      {path: 'setting', loadChildren: () => import('./setting/setting.module')
          .then(m => m.SettingModule) , canActivate: [AuthenticateOnly] },

      {path: 'hr', loadChildren: () => import('./hr/hr.module')
          .then(m => m.HrModule) , canActivate: [AuthenticateOnly] },

      {path: 'acl', loadChildren: () => import('./acl/AclModule')
          .then(m => m.AclModule) , canActivate: [AuthenticateOnly] },

      {path: 'prescription', loadChildren: () => import('./prescription/PrescriptionModule')
          .then(m => m.PrescriptionModule) , canActivate: [AuthenticateOnly] },

      {path: 'opd', loadChildren: () => import('./opd/opd.module')
          .then(m => m.OpdModule) , canActivate: [AuthenticateOnly] },

      {path: 'radiology', loadChildren: () => import('./radiology/radiology.module')
          .then(m => m.RadiologyModule) , canActivate: [AuthenticateOnly] },

      {path: 'laboratory', loadChildren: () => import('./laboratory/laboratory.module')
          .then(m => m.LaboratoryModule) , canActivate: [AuthenticateOnly] },

      {path: 'pathology', loadChildren: () => import('./pathology/pathology.module')
          .then(m => m.PathologyModule) , canActivate: [AuthenticateOnly] },

      {path: 'blood-bank', loadChildren: () => import('./blood-bank/blood-bank.module')
          .then(m => m.BloodBankModule) , canActivate: [AuthenticateOnly] },

      {path: 'pharmacy', loadChildren: () => import('./pharmacy/pharmacy.module')
          .then(m => m.PharmacyModule) , canActivate: [AuthenticateOnly] },

      {path: 'ehr', loadChildren: () => import('./ehr/ehr.module')
          .then(m => m.EhrModule) , canActivate: [AuthenticateOnly] },

      {path: 'emergency', loadChildren: () => import('./emergency/emergency.module')
          .then(m => m.EmergencyModule) , canActivate: [AuthenticateOnly] },

      {path: 'billing', loadChildren: () => import('./billing/billing.module')
          .then(m => m.BillingModule) , canActivate: [AuthenticateOnly] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
