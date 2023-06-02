import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
      const response = this.http.get(`${this.url + 'rpd'}?createdBy=${createdBy}`)
      return response;
    } else {
      const response = this.http.get(this.url + 'rpd');
      return response;
    }
  }

  postRpd(data: CreateRpd) {
    const response = this.http.post(this.url + 'rpd', data)
    response.subscribe()
    return response
  }

}
