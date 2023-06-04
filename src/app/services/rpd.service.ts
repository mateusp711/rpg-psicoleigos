import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Rpd } from '../pages/rpd/rpd.component';

export interface CreateRpd {
  event: string,
  behavior: string,
  automatic_thought: string,
  emotion: string,
  date: string,
  restructuring: string,
  createdBy: string
}

@Injectable({
  providedIn: 'root'
})

export class RpdService {

  constructor(private http: HttpClient) { }
  url: string = environment.baseUrl

 getAllRpds(createdBy: string | null) {
  if (createdBy) {
     return this.http.get<Rpd[]>(`${this.url + 'rpd'}?createdBy=${createdBy}`);
    } else {
     return this.http.get<Rpd[]>(this.url + 'rpd');
    }
  }

  postRpd(data: CreateRpd) {
    const response = this.http.post(this.url + 'rpd', data)
    response.subscribe()
    return response
  }

}
