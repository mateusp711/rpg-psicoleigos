import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpdRoutingModule } from './rpd-routing.module';
import { RpdComponent } from './rpd.component';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';



@NgModule({
  declarations: [RpdComponent],
  imports: [
    CommonModule,
    RpdRoutingModule,
    NavBarModule
  ]
})
export class RpdModule { }
