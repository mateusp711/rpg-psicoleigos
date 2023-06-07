import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, Ticks } from 'chart.js';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RpdService } from 'src/app/services/rpd.service';
import { User } from 'src/app/services/user.service';

export interface Rpd {
  event: string;
  automatic_thought: string;
  emotion: string;
  date: Date;
  restructuring: string;
  _id?: string;
  createdBy: string;
}

@Component({
  selector: 'app-rpd',
  templateUrl: './rpd.component.html',
  styleUrls: ['./rpd.component.scss'],
})
export class RpdComponent implements OnInit {
  title = 'ng2-charts-demo';
  user?: User;
  weeklyRpds: Rpd[] = [];
  data: number[] = [];
  public chartData: ChartConfiguration<'polarArea'>['data'] | undefined =
    undefined;
  public chartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    scales: {
      r: {

        grid: {
          z: 1,
          color: 'rgba(0, 0, 0, 0.25)',
        },
        ticks: {
          stepSize: 1,
          textStrokeWidth: 4,
          textStrokeColor: "#9BD0F5",
          showLabelBackdrop: false,
          z: 1,
          color: 'rgba(0, 0, 0, 0.75)',
          font: {
            weight: 'bold',
          }
        }
      }
    }
  };
  public chartLegend = true;

  constructor(
    private authService: AuthService,
    private rpdService: RpdService
  ) {}

  async ngOnInit() {
    await this.getWeeklyRpds();
    this.user = await this.authService.getUser();
    this.CanvasEntry();
  }

  async getRpds(): Promise<Rpd[] | undefined> {
    if (this.user) {
      return await firstValueFrom(this.rpdService.getAllRpds(this.user.email));
    } else { return [] }
  }

  getWeek(fromDate: Date) {
    var sunday = new Date(
        fromDate.setDate(fromDate.getDate() - fromDate.getDay())
      ),
      result = [new Date(sunday).toISOString().slice(0, 10)];
    while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
      result.push(new Date(sunday).toISOString().slice(0, 10));
    }
    return result;
  }

  async getWeeklyRpds() {
    const rpds = await this.getRpds();
    const today = new Date();
    const week = this.getWeek(today);
    let weeklyRpds: Rpd[] = [];
    if (rpds) {
      weeklyRpds = rpds.filter((rpd) =>
        week.includes(new Date(rpd.date).toISOString().slice(0, 10))
      );
    }
    console.log(rpds);
    return (this.weeklyRpds = weeklyRpds);
  }

  getNumberOfEmotions(emotion: string) {
    const rpdByEmotion = this.weeklyRpds.filter(
      (rpd) => rpd.emotion === emotion
    );
    return rpdByEmotion;
  }

  CanvasEntry() {
    const canvasEntry = {
      labels: ['raiva', 'tristeza', 'vergonha', 'nojo', 'alegria'],
      scales: {
        ticks: {
          z: 3,
        },
      },
      datasets: [
        {
          data: [
            this.getNumberOfEmotions('raiva').length,
            this.getNumberOfEmotions('tristeza').length,
            this.getNumberOfEmotions('vergonha').length,
            this.getNumberOfEmotions('nojo').length,
            this.getNumberOfEmotions('alegria').length,
          ],
          label: 'Alegria',
          backgroundColor: [
            'rgb(220,20,60)',
            'rgb(30,144,255)',
            'rgb(153,50,204)',
            'rgb(46,139,87)',
            'rgb(255, 213, 0)'
          ],
          borderColor: [
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)',
            'rgb(255,255,255)'
          ],
          hoverBorderColor: [
            'rgb(220,20,60)',
            'rgb(30,144,255)',
            'rgb(153,50,204)',
            'rgb(46,139,87)',
            'rgb(255, 213, 0)'
          ],
        },
      ],
    };
    this.chartData = canvasEntry;
  }
}
