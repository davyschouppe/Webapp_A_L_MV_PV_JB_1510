import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


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
import {FirebaseService} from './firebase.service';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB7cDWrIxfDlQ8W-t_y-0X_mZwGA6TOp9U',
    authDomain: 'fir-a-l-mv-pv-jb-1510.firebaseapp.com',
    databaseURL: 'https://fir-a-l-mv-pv-jb-1510.firebaseio.com',
    projectId: 'fir-a-l-mv-pv-jb-1510',
    storageBucket: 'fir-a-l-mv-pv-jb-1510.appspot.com',
    messagingSenderId: '526547676301'
  }
};

const appRoutes: Routes = [
  { path: 'locatie/:trajectid/:locatieid', canActivate: [ AuthGuardService ], component: TrajectLocatiesDetailComponent},
  { path: 'traject/:id', canActivate: [ AuthGuardService ], component: TrajectComponent},
  { path: 'trajecten', canActivate: [ AuthGuardService ], component: TrajectenComponent},
  { path: 'leerling/:id', canActivate: [ AuthGuardService ], component: LeerlingenDetailComponent },
  { path: 'leerlingen', canActivate: [ AuthGuardService ], component: LeerlingenComponent },
  { path: 'ods', canActivate: [ AuthGuardService ], component: OdsComponent},
  { path: 'afspraken', canActivate: [ AuthGuardService ], component: AfsprakenComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AfsprakenDataServiceService,
    OdsDataService,
    TrajectenDataService,
    AuthenticationService,
    AuthGuardService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
