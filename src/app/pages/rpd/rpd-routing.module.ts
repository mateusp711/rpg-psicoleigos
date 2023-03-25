import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpdComponent } from './rpd.component';

const routes: Routes = [{ path: '', component: RpdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpdRoutingModule { }
