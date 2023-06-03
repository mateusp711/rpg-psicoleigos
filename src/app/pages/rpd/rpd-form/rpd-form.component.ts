import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CreateRpd, RpdService } from 'src/app/services/rpd.service';

@Component({
  selector: 'app-rpd-form',
  templateUrl: './rpd-form.component.html',
  styleUrls: ['./rpd-form.component.scss']
})
export class RpdFormComponent implements OnInit {
  status?: string;
  teste = ['raiva', 'tristeza', 'alegria', 'vergonha', 'nojo']

  constructor(private authService: AuthService, private rpdService: RpdService){}

  ngOnInit(){}

    form = new FormGroup({
    "event": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    "automatic_thought": new FormControl("", [Validators.required, Validators.maxLength(255)]),
    "behavior": new FormControl(null, [Validators.required]),
    "emotion": new FormControl("", [Validators.required]),
    "restructuring": new FormControl("", [Validators.required]),
    "date": new FormControl((new Date()).toISOString().substring(0,10), [Validators.required])
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
      console.log(data);
      this.rpdService.postRpd(data)
    }
  }

    clearForm(){
    this.form.reset()
  }

  clickButton(item: string){
    this.status = item;
    this.form.controls['emotion'].setValue(item);
  }

}
