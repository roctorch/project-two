import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.scss']
})
export class ScheduleEventComponent implements OnInit {

  openTime: number;

  @Input("eventInput") event: any = {};

  constructor() {
    this.openTime = 800;
  }

  ngOnInit(): void {
  }

  timeBlockStyle(startTime: any, endTime: any) {
    // time format "XX:XX?M"
    // Processing
    startTime = startTime.replace(":", "");
    endTime = endTime.replace(":", "");
    if (startTime.includes("PM") && !startTime.includes("1200PM")) {
      startTime = Number.parseInt(startTime) + 1200;
    } else {
      startTime = Number.parseInt(startTime);
    }
    if (endTime.includes("PM") && !endTime.includes("1200PM")) {
      endTime = Number.parseInt(endTime) + 1200;
    } else {
      endTime = Number.parseInt(endTime);
    }
    // Calculating
    const n = 2 * (Math.floor(Math.abs(this.openTime - startTime) / 100) + Math.abs(this.openTime - startTime) % 100 / 60);
    const m = 2 * (Math.floor(Math.abs(startTime - endTime) / 100) + Math.abs(startTime - endTime) % 100 / 60);

    return { 'top': `calc(5.2631578% *${n} + 1px)`, 'height': `calc(5.2631578% *${m} - 1px)` }
  }
}
