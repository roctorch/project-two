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
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      const loginSubmission = this.loginForm.value;
      console.log(loginSubmission);
      // TODO: userService Login
      // code outline but not exact
      // this.userService.doLogin(credentials)
      //   .subscribe({
      //     next: (response: any) => {
      //       localStorage.setItem("token", response.jwt);
      //       this.router.navigate([/*some url*/])
      //     }
      //   })
    }

  }
}
