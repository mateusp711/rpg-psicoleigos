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
  /*   title = 'ng2-charts-demo';

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
   */

  constructor(private authService: AuthService, private rpdService: RpdService) {

  }
  form = new FormGroup({
    "event": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    "automatic_thought": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    "behavior": new FormControl(null, [Validators.required]),
    "emotion": new FormControl("", [Validators.required]),
    "restructuring": new FormControl("", [Validators.required]),
    "date": new FormControl("", [Validators.required])
  });

  onSubmit() {
    if (this.form.controls['behavior'].value && this.form.controls['event'].value && this.form.controls['automatic_thought'].value && this.form.controls['emotion'].value && this.form.controls['date'].value && this.form.controls['restructuring'].value) {
      const data: CreateRpd = {
        event: this.form.controls['event'].value,
        automatic_thought: this.form.controls['automatic_thought'].value,
        behavior: this.form.controls['behavior'].value,
        emotion: this.form.controls['emotion'].value,
        date: this.form.controls['date'].value,
        restructuring: this.form.controls['restructuring'].value,
        createdBy: this.authService.userData.email
      }

      console.log("reactive form submitted");
      console.log(data);
      this.rpdService.postRpd(data)
    }
  }
  ngOnInit() {
    this.rpdService.getAllRpds('mateus_s29@live.com').subscribe(data => {
      console.log(data)
    })
  }
}
