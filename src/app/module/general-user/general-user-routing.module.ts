import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralUserComponent} from "./general-user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


const routes: Routes = [{
  path: 'user',
  component: GeneralUserComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
     },
    {
      path: 'product-details',
      component: ProductDetailComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralUserRoutingModule {
}
