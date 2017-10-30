import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { TrajectenComponent } from './trajecten/trajecten.component';
import { TrajectLocatiesComponent } from './traject-locaties/traject-locaties.component';
import { TrajectComponent } from './traject/traject.component';
import { TrajectOdsComponent } from './traject-ods/traject-ods.component';
import { TrajectAfsprakenComponent } from './traject-afspraken/traject-afspraken.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    TrajectenComponent,
    TrajectLocatiesComponent,
    TrajectComponent,
    TrajectOdsComponent,
    TrajectAfsprakenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
