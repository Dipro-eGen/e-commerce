import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountToModule} from 'angular-count-to';
import {NgbDropdownModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {SimplebarAngularModule} from 'simplebar-angular';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {LightboxModule} from 'ngx-lightbox';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {SharedModule} from '../shared/shared.module';
import {WidgetModule} from '../shared/widget/widget.module';
import {ModuleRoutingModule} from './module-routing.module';
import {UserAuthService} from '../common/service/user-auth.service';
import {AuthRoleGuard} from '../common/service/auth-role-guard.service';
import {LanguageService} from '../common/service/language.service';
import {EventService} from '../common/service/event.service';
import {ModuleComponent} from './module.component';
import {FormService} from '../common/service/form-service';
import {HrModule} from "./hr/hr.module";
import {CommonService} from './pharmacy/common-service/common.service';
import {AuthenticateOnly} from '../common/service/auth_guard/AuthenticateOnly';
import {HaveMenuAccess} from "../common/service/auth_guard/HaveMenuAccess";
import {SuperAdminOnly} from "../common/service/auth_guard/SuperAdminOnly";
import {LayoutsModule} from "../shared/layouts/layouts.module";

@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    LayoutsModule,
    WidgetModule,
    CountToModule,
    SharedModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    CarouselModule,
    NgbDropdownModule,
    NgbNavModule,
    LightboxModule,
    LeafletModule,
    HrModule
  ],
  providers: [
    AuthenticateOnly,
    HaveMenuAccess,
    AuthRoleGuard,
    UserAuthService,
    LanguageService,
    EventService,
    FormService,
    CommonService,
    SuperAdminOnly,
  ],
})
export class ModuleModule { }
