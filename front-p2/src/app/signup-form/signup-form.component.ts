import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {

  signupForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  floatLabelControl = new FormControl('auto');

  handleSubmit(event: Event) {

    if (this.signupForm.valid) {
      let formData = this.signupForm.value;
      this.userService.doSignup(formData)
    }

  }

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.formBuilder.group({
      floatLabel: this.floatLabelControl
    })
  }

  ngOnInit(): void {
    this.userService.userStream
      .subscribe({
        next: (e: any) => {
          if (e.action === "SIGNUP_SUCCESS") {
            this.router.navigate(["/login-form"])
          }
        }
      })
  }
}
