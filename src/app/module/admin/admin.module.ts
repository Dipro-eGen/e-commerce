import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminPanelService} from "./admin-panel/admin-panel-service";
import { AddProductComponent } from './add-product/add-product.component';
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AddProductService} from "./add-product/add-product-service";
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AdminComponent,
    AdminPanelComponent,
    AddProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AdminRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers:[AdminPanelService,AddProductService]
})
export class AdminModule { }
