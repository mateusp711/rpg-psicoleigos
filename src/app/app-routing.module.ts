import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthGuard2 } from './shared/guard/logged.guard';


const routes: Routes = [
  { path: 'landing-page', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule), canActivate: [AuthGuard2] },

  { path: 'rpd', loadChildren: () => import('./pages/rpd/rpd.module').then(m => m.RpdModule), canActivate: [AuthGuard] },

  { path: 'sign-in', loadChildren: () => import('./components/sign-in/sign-in.module').then(m => m.SignInModule) },

  { path: 'forgot-password', loadChildren: () => import('./components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },

  { path: 'sign-up', loadChildren: () => import('./components/sign-up/sign-up.module').then(m => m.SignUpModule) },

  { path: 'verify-email', loadChildren: () => import('./components/verify-email/verify-email.module').then(m => m.VerifyEmailModule) },

  { path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule), canActivate: [AuthGuard2] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
