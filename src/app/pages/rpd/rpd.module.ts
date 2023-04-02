import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpdRoutingModule } from './rpd-routing.module';
import { RpdComponent } from './rpd.component';



@NgModule({
  declarations: [RpdComponent],
  imports: [
    CommonModule,
    RpdRoutingModule
  ]
})
export class RpdModule { }
