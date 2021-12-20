import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  findAvailableTimes(serviceDate: Date){
    return this.httpClient.post("http://localhost:8080/schedule")
  }
  constructor(private httpClient: HttpClient) { }
}
