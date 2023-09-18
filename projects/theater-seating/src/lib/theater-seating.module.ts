import { NgModule } from '@angular/core';
import { TheaterSeatingComponent } from './theater-seating.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TheaterSeatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TheaterSeatingComponent,
  ]
})
export class TheaterSeatingModule { }
