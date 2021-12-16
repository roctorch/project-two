import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: ['']
  });
  floatLabelControl = new FormControl('auto');

  handleSubmit(event: Event) {
    let credentials = this.loginForm.value;
    console.log(credentials);
    // this.userService.doLogin(credentials)
    //   .subscribe({
    //     next: (response: any) => {
    //       localStorage.setItem("token", response.jwt);
    //       this.router.navigate([/*some url*/])
    //     }
    //   })
  }

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router) {
      this.formBuilder.group({
        floatLabel: this.floatLabelControl
      })
  }

  ngOnInit(): void {
  }

}
