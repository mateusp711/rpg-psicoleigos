import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: 'landing-page', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule)},

  { path: 'rpd', loadChildren: () => import('./pages/rpd/rpd.module').then(m => m.RpdModule), canActivate: [AuthGuard] },

  { path: 'sign-in', loadChildren: () => import('./components/sign-in/sign-in.module' ).then(m => m.SignInModule)},

  { path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
