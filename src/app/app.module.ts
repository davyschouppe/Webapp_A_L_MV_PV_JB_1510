import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    LeerlingenDetailTrackingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
