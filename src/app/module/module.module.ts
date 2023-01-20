import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleComponent} from "./module.component";
import {ModuleRoutingModule} from "./module-routing.module";
import {AuthModule} from "./auth/auth.module";
import {AdminModule} from "./admin/admin.module";
import {GeneralUserModule} from "./general-user/general-user.module";
import {AdminPanelService} from "./admin/admin-panel/admin-panel-service";

@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    AdminModule,
    GeneralUserModule,
    ModuleRoutingModule,


  ],
  providers: [
      ],
})
export class ModuleModule { }
