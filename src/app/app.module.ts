import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterSeatingModule } from 'dist/theater-seating';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TheaterSeatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
