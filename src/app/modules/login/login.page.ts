import { LoginResponseI } from 'src/app/interfaces/login-response.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    localStorage.getItem('token') && this.router.navigate(['/dashboard']);
  }

  async onSubmit() {
    try {
      this.authService
        .login(this.email, this.password)
        .subscribe(async (response: LoginResponseI) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.item));
          this.router.navigate(['/dashboard']);
        });
    } catch (error) {
      console.error(error);
    }
  }
}
