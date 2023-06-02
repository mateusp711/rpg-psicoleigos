import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChartConfiguration, ChartOptions, Ticks, scales } from 'chart.js';
import { Scale } from 'chart.js/dist';
import { AuthService } from 'src/app/services/auth.service';
import { CreateRpd, RpdService } from 'src/app/services/rpd.service';
import { User } from 'src/app/services/user.service';


@Component({
  selector: 'app-rpd',
  templateUrl: './rpd.component.html',
  styleUrls: ['./rpd.component.scss']
})
export class RpdComponent implements OnInit {
    title = 'ng2-charts-demo';

    public chartData: ChartConfiguration<'polarArea'>['data'] = {
      labels: [
        'Raiva',
        'Tristeza',
        'Vergonha',
        'Nojo',
        'Alegria',
      ],
      datasets: [
        {
          data: [0, 4, 7, 6, 10],
          label: 'Alegria',
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ],
        },
      ],
    };
    public chartOptions: ChartOptions<'polarArea'> = {
      responsive: false,
    };
    public chartLegend = true;

  constructor(private authService: AuthService, private rpdService: RpdService) {}


  ngOnInit() {
    const user = this.authService.getUser()
    this.rpdService.getAllRpds(user.email).subscribe(data => {
    })
  }
}
