import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpdRoutingModule } from './rpd-routing.module';
import { RpdComponent } from './rpd.component';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RpdFormComponent } from './rpd-form/rpd-form.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';



@NgModule({
  declarations: [RpdComponent, RpdFormComponent],
  imports: [
    CommonModule,
    RpdRoutingModule,
    NavBarModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: true } }
  ]
})
export class RpdModule { }
