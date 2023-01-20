import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModuleModule} from "./module/module.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AdminPanelService} from "./module/admin/admin-panel/admin-panel-service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModuleModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
