import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  message: string = "";

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });
  floatLabelControl = new FormControl('auto');

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.formBuilder.group({
      floatLabel: this.floatLabelControl
    })
  }

  ngOnInit(): void {
    // Observable from userService
    // actions : LOGIN_SUCCESS, LOGIN_FAILED
    this.userService.userStream
      .subscribe({
        next: (e: any) => {
          if (e.action === "LOGIN_SUCCESS")
            this.router.navigate(["/schedule"])
          if (e.action === "LOGIN_FAILED") {
            console.log(e);
            this.message = "Invalid User Credentials"
          }
        }
      })
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      const loginSubmission = this.loginForm.value;
      console.log(loginSubmission);
      // TODO: userService Login
      // code outline but not exact
      this.userService.doLogin(loginSubmission)
      // userService.userStream streams out actions
    }
  }
}
