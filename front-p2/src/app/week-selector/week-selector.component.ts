import { Component, Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss'],
})

export class WeekSelectorComponent implements OnInit {

  weekSelectorForm: FormGroup = this.formBuilder.group({
    mondayDate: ["", Validators.required],
  })

  @Output() mondayDateEvent = new EventEmitter<Date>();
  
  constructor(private formBuilder: FormBuilder) {
    this.weekSelectorForm.get('mondayDate')?.valueChanges.subscribe(
      value => {
        console.log('HERE');
        this.mondayDateEvent.emit(value);
      })
  }

  ngOnInit(): void {
  }

  // Date Filters
  mondayDatesFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent everything buy mondays
    return day == 1;
  }
}

