import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FootersRoutingModule } from './footer.routing';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FootersRoutingModule
  ]
})
export class FooterModule { }
