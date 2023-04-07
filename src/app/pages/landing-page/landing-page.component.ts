import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './bubly-button.scss']
})
export class LandingPageComponent implements OnInit {
  bubblyButtons = document.getElementsByClassName("bubbly-button");

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    for (var i = 0; i < this.bubblyButtons.length; i++) {
      this.bubblyButtons[i].addEventListener('click', this.animateButton, false);
    }
  }

  animateButton = (e: any) => {
    try {
      e.preventDefault;
      e.target.classList.remove('animate');
    }
    finally {
      e.target.classList.add('animate');
      setTimeout(function () {
        e.target.classList.remove('animate');
      }, 700);
    }
  };

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
