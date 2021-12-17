import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {

  scheduleForm: FormGroup = this.formBuilder.group({
    serviceName: ["", Validators.required],
    serviceDate: ["", Validators.required],
    startTime: [{ value: "", disabled: true }, Validators.required],
  })

  times: any[] = ["08:00AM", "08:30AM", "09:00AM", "09:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM",
    "12:00PM", "12:30PM", "01:00PM", "01:30PM", "02:00PM", "02:30PM", "03:00PM", "03:30PM", "04:00PM", "04:30PM", "05:00PM"];

  // Optional TODO: Load Services from DB
  services: any[] = ["Oil Change", "Tire Maintenance", "Car Detailing", "Test"];
  // DB dependent
  availTimeMap: Map<string, boolean> = new Map<string, boolean>();

  constructor(private formBuilder: FormBuilder) {
    // Listening for changes to 
    this.scheduleForm.get('serviceDate')?.valueChanges.subscribe(
      value => {
        console.log(value)
        this.scheduleForm.controls['startTime'].enable();
        // TODO: HERE load availTimeMap information based on serviceDate

        // TODO: Have a similar observable to ship information to back-end
      }
    )
  }

  ngOnInit(): void {
    // TODO: Load information via DB
    this.availTimeMap.set("08:00AM", true)
    this.availTimeMap.set("09:00AM", true)
    this.availTimeMap.set("10:00AM", true)
    this.availTimeMap.set("11:00AM", true)
    this.availTimeMap.set("12:00PM", false)
    this.availTimeMap.set("01:00PM", false)
    this.availTimeMap.set("02:00PM", false)
    this.availTimeMap.set("03:00PM", false)
    this.availTimeMap.set("04:00PM", true)
    this.availTimeMap.set("05:00PM", false)
    this.availTimeMap.set("08:30AM", true)
    this.availTimeMap.set("09:30AM", true)
    this.availTimeMap.set("10:30AM", false)
    this.availTimeMap.set("11:30AM", true)
    this.availTimeMap.set("12:30PM", true)
    this.availTimeMap.set("01:30PM", true)
    this.availTimeMap.set("02:30PM", true)
    this.availTimeMap.set("03:30PM", true)
    this.availTimeMap.set("04:30PM", true)
  }
  // Date Filters
  weekendsDatesFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Weekends
    return day !== 0 && day !== 6;
  }
  beforeNowDatesFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    const nowDate = new Date()
    // Prevent days before
    return (
      day.getFullYear() >= nowDate.getFullYear() &&
      day.getMonth() >= nowDate.getMonth() &&
      day.getDate() >= nowDate.getDate()
      // Robustness add time as well
      )
  }
  // Usage of combinedDateFilter because of property binding [disabled]
  combinedDateFilter = (d: Date | null): boolean => {
    return (this.beforeNowDatesFilter(d) && this.weekendsDatesFilter(d))
  }

  // Event Handling
  handleSubmit(){
    // At this point: form is valid by guards before but additional guard
    if(this.scheduleForm.valid){
      const toBeSubmitted = this.scheduleForm.value;
      console.log(toBeSubmitted);
      // TODO: Send to back-end, needs user info
    }
  }
}

/* Was going to use
  // Validators
  matcher = new MyErrorStateMatcher();

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
*/
