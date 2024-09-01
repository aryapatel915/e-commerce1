import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginResponse {
  businessID: string;
  isAdmin: boolean;
  token: string;
  userId: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
  loginForm: FormGroup;
  recoverPasswordForm:  FormGroup;
  isRecovering: boolean = false;

  constructor(private fb: FormBuilder, private http : HttpClient,private router : Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.recoverPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmitLogin(value: { email: string; password: string }) {
    console.log('value: ', value);
    const userId = localStorage.getItem('userid');
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.http.post<{ email: string; token: string; userid: string }>('http://localhost:3000/user/login', value).subscribe(
        response => {
          console.log('Success!', response);
  
          localStorage.setItem('email', response.email);
          localStorage.setItem('token', response.token);
          localStorage.setItem('userid', response.userid);
          this.router.navigate(['admin/admin/order-details']);
        },
        error => {
          console.error('Error!', error);
        }
      );
    }
  }



  toggleRecoverPassword() {
    this.isRecovering = !this.isRecovering;
  }
}
