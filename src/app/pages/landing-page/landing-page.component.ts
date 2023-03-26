import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './bubly-button.scss']
})
export class LandingPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  animateButton = (e: any) => {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };

  bubblyButtons = document.getElementsByClassName("bubbly-button");


  bubbles() {
    for (var i = 0; i < this.bubblyButtons.length; i++) {
      this.bubblyButtons[i].addEventListener('click', this.animateButton, false);
    }
  }

}
