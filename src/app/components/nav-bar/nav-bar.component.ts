import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  teste: string = this.authService.userData.photoURL || ''
  constructor(private authService: AuthService, private router: Router) { }

  navigateToRpd() {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['rpd'])
    }
    else { this.router.navigate(['sign-in']) }
  }

  logOut() {
    this.authService.SignOut()
  }

}
