import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './bubly-button.scss']
})
export class LandingPageComponent implements OnInit {
  bubblyButtons = document.getElementsByClassName("bubbly-button");

  constructor(authService: AuthService) { }

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

}
