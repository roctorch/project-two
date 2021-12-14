import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule-viewer',
  templateUrl: './schedule-viewer.component.html',
  styleUrls: ['./schedule-viewer.component.scss']
})
export class ScheduleViewerComponent implements OnInit {
  times: Array<String> = ["08:00AM","08:30AM","09:00AM","09:30AM","10:00AM","10:30AM","11:00AM","11:30AM",
  "12:00PM","12:30PM","01:00PM","01:30PM","02:00PM","02:30PM","03:00PM","03:30PM","04:00PM","04:30PM","05:00PM"];

  dateMap: Map<string,string> = new Map<string,string>();

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.dateMap.set("Monday","MM/DD/YY");
    this.dateMap.set("Tuesday","MM/DD/YY");
    this.dateMap.set("Wednesday","MM/DD/YY");
    this.dateMap.set("Thursday","MM/DD/YY");
    this.dateMap.set("Friday","MM/DD/YY");

  }

}
