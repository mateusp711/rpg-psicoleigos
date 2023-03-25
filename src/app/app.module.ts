import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpdComponent } from './pages/rpd/rpd.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

  @NgModule({
  declarations: [
    AppComponent,
    RpdComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
