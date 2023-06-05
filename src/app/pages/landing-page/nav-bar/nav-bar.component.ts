import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(
    private auth: AuthService,
      private angularFireAuth: AngularFireAuth,
      private router: Router
  ) {}

  async googleLogin() {
  await this.auth.GoogleAuth();
  this.router.navigate(['rpd'])
  }
}
