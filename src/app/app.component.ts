import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rpg-psicoleigos';
  loaded: boolean = true;


  ngOnInit() {
    setTimeout(() => {
      this.loaded = false;
    }, 1000);
  }
}
