import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.loginForm.invalid) return;
    this._userService.login(this.loginForm.value).subscribe(
      res => {
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/home']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
