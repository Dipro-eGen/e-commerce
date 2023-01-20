import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {AuthGuard} from "../../auth.guard";
import {AddProductComponent} from "./add-product/add-product.component";


const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: 'panel',
      component: AdminPanelComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'add-product',
      component: AddProductComponent,
      canActivate: [AuthGuard],
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
