import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralUserComponent} from "./general-user.component";
import {RouterOutlet} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {GeneralUserRoutingModule} from "./general-user-routing.module";
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [GeneralUserComponent, DashboardComponent, ProductDetailComponent],
  imports: [
    CommonModule,
   GeneralUserRoutingModule
  ]
})
export class GeneralUserModule { }
