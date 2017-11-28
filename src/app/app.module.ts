import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { TrajectenComponent } from './trajecten/trajecten.component';
import { TrajectLocatiesComponent } from './traject-locaties/traject-locaties.component';
import { TrajectComponent } from './traject/traject.component';
import { TrajectOdsComponent } from './traject-ods/traject-ods.component';
import { TrajectAfsprakenComponent } from './traject-afspraken/traject-afspraken.component';
import { OdsComponent } from './ods/ods.component';
import { AfsprakenComponent } from './afspraken/afspraken.component';
import { TrajectLocatiesDetailComponent } from './traject-locaties-detail/traject-locaties-detail.component';
import { LeerlingenComponent } from './leerlingen/leerlingen.component';
import { LeerlingenInfoDetailComponent } from './leerlingen-detail-info/leerlingen-detail-info.component';
import { LeerlingenDetailComponent } from './leerlingen-detail/leerlingen-detail.component';
import { LeerlingenDetailTrackingComponent } from './leerlingen-detail-tracking/leerlingen-detail-tracking.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderByPipe } from './custom_pipes/order-by.pipe';

import { AfsprakenDataServiceService } from './afspraken-data-service.service';
import { OdsDataService } from './ods-data.service';
import { TrajectenDataService } from './trajecten-data.service';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'locatie/:trajectid/:locatieid', canActivate: [ AuthGuardService ], component: TrajectLocatiesDetailComponent},
  { path: 'traject/:id', canActivate: [ AuthGuardService ], component: TrajectComponent},
  { path: 'trajecten', canActivate: [ AuthGuardService ], component: TrajectenComponent},
  { path: 'leerling', canActivate: [ AuthGuardService ], component: LeerlingenDetailComponent },
  { path: 'leerlingen', canActivate: [ AuthGuardService ], component: LeerlingenComponent },
  { path: 'ods', canActivate: [ AuthGuardService ], component: OdsComponent},
  { path: 'afspraken', canActivate: [ AuthGuardService ], component: AfsprakenComponent},
  { path: '', redirectTo: 'trajecten', pathMatch: 'full'},
  { path: '**', redirectTo: 'trajecten', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    TrajectenComponent,
    TrajectLocatiesComponent,
    TrajectComponent,
    TrajectOdsComponent,
    TrajectAfsprakenComponent,
    OdsComponent,
    AfsprakenComponent,
    TrajectLocatiesDetailComponent,
    LeerlingenComponent,
    LeerlingenInfoDetailComponent,
    LeerlingenDetailComponent,
    LeerlingenDetailTrackingComponent,
    LoginComponent,
    LogoutComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AfsprakenDataServiceService,
    OdsDataService,
    TrajectenDataService,
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
