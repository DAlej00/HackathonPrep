import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
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
    this._authService.login(this.loginForm.value).subscribe(
      res => {
        if (res.access_token) {
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/home']);
        } else {
          if (res.code == 401) {
            Swal.fire({
              type: 'error',
              titleText: 'Sin autorización',
              text: 'No posee permisos para el programa',
              timer: 4500
            });
          } else if (res.code == 401.1) {
            Swal.fire({
              type: 'error',
              titleText: 'Datos erroneos',
              text: 'No coinciden los datos ingresados',
              timer: 3000
            });
          }
        }
      },
      error => {
        Swal.fire({
          type: 'error',
          titleText: 'Error de conexion',
          text: 'Ha ocurrido un error, intentalo más tarde',
          timer: 3000
        });
      }
    );
  }
}
