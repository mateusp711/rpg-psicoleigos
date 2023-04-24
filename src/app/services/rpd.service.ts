import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
  url: string = 'http://localhost:3000/api/rpd'

  getAllRpds(createdBy: string | null) {
    if (createdBy) {
      const response = this.http.get(`${this.url}?createdBy=${createdBy}`)
      return response;
    } else {
      const response = this.http.get(this.url);
      return response;
    }
  }

  postRpd(data: CreateRpd) {
    const response = this.http.post(this.url, data)
    response.subscribe()
    return response
  }

}
