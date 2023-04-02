import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rpd',
  templateUrl: './rpd.component.html',
  styleUrls: ['./rpd.component.scss']
})
export class RpdComponent implements OnInit {
  constructor(public authService: AuthService) { }
  ngOnInit() { }

}
