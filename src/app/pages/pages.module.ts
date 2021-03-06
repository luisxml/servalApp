
// Principal Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Modules
import { SharedModule } from '../shared/shaerd.module';
import { PAGES_ROUTES } from './pages.routes';

// MODULO DE GRAFICAS
import { ChartsModule } from 'ng2-charts';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { UpdateModuleComponent } from './update-module/update-module.component';

// Components
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanysComponent } from './companys/companys.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { ModulesComponent } from './modules/modules.component';
import { GraphicsDoughnutComponent } from '../components/graphics-doughnut/graphics-doughnut.component';
import { RolesUserComponent } from './roles-user/roles-user.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateAddressClientComponent } from './update-address-client/update-address-client.component';

@NgModule({
    declarations: [
        DashboardComponent,
        AccountSettingsComponent,
        ProfileComponent,
        SearchComponent,
        CompanysComponent,
        AddcompanyComponent,
        UpdateAddressComponent,
        ModulesComponent,
        UpdateModuleComponent,
        RolesUserComponent,
        UsersComponent,
        AddUsersComponent,
        GraphicsDoughnutComponent,
        PermissionsComponent,
        HomeComponent,
        ClientsComponent,
        AddClientComponent,
        UpdateAddressClientComponent
    ],
    exports: [
        // PagesComponent,
        // DashboardComponent,
        // ProgressComponent,
        // Graphics1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class PagesModule { }