import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule-viewer',
  templateUrl: './schedule-viewer.component.html',
  styleUrls: ['./schedule-viewer.component.scss']
})
export class ScheduleViewerComponent implements OnInit {
  // static
  times: Array<String> = ["08:00AM", "08:30AM", "09:00AM", "09:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM",
    "12:00PM", "12:30PM", "01:00PM", "01:30PM", "02:00PM", "02:30PM", "03:00PM", "03:30PM", "04:00PM", "04:30PM", "05:00PM"];

  // variables to be loaded via DB
  // dayName :-> date format MM/DD/YY
  dateMap: Map<string, string> = new Map<string, string>();
  // dayName :-> List of Events for the dayName
  eventMap: Map<string, Array<any>> = new Map<string, Array<any>>();
  constructor(private router: Router) { }
  ngOnInit(): void {
    // Loaded from DB
    this.dateMap.set("Monday", "MM/DD/YY");
    this.dateMap.set("Tuesday", "MM/DD/YY");
    this.dateMap.set("Wednesday", "MM/DD/YY");
    this.dateMap.set("Thursday", "MM/DD/YY");
    this.dateMap.set("Friday", "MM/DD/YY");
    // Loaded from DB
    this.eventMap.set("Monday",
      [{
        name: "jobName",
        customerName: "customerName",
        startTime: "08:00AM",
        endTime: "10:30AM"
      },
      {
        name: "jobName",
        customerName: "customerName",
        startTime: "11:00AM",
        endTime: "12:30AM"
      }
      ]);
      this.eventMap.set("Wednesday",
      [{
        name: "jobName",
        customerName: "customerName",
        startTime: "09:00AM",
        endTime: "10:30AM"
      },
      {
        name: "jobName",
        customerName: "customerName",
        startTime: "11:00AM",
        endTime: "12:00PM"
      }
      ]);
  }
  hourStyle(s: any) {
    // Guard clause
    if (s === "05:00PM") return {};
    // Processing Number
    s = s.replace(":", "");
    let num = Number.parseInt(s);
    if (num % 100 === 0) return { 'border-style': 'solid solid dashed solid', 'border-width': '1px', 'border-color': 'black' };
    return { 'border-style': 'dashed solid solid solid', 'border-width': '1px', 'border-color': 'black' };
    // 
  }
} 
