import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SignInModule } from 'src/app/components/sign-in/sign-in.module';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { LandingPageComponent } from './landing-page.component';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SignInModule
  ]
})
export class LandingPageModule { }
