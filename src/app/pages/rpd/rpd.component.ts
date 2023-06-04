import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
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
  user: User = this.authService.getUser();
  weeklyRpds: Rpd[] = [];
  data: number[] = [];
  public chartData: ChartConfiguration<'polarArea'>['data'] | undefined =
    undefined;
  public chartOptions: ChartOptions<'polarArea'> = { responsive: true };
  public chartLegend = true;

  constructor(
    private authService: AuthService,
    private rpdService: RpdService
  ) {}

  async ngOnInit() {
    await this.getWeeklyRpds();
    this.CanvasEntry()
  }

  async getRpds(): Promise<Rpd[] | undefined> {
    return await firstValueFrom(this.rpdService.getAllRpds(this.user.email));
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
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
          ],
        },
      ],
    };
    this.chartData = canvasEntry;
  }
}
