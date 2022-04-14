import { LoginResponseI } from 'src/app/interfaces/login-response.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginViewModel } from './model/login.view-model';

@Component({
    selector: 'page-login',
    templateUrl: 'login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    vm = new LoginViewModel();
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        localStorage.getItem('token') && this.router.navigate(['/dashboard']);
    }

    async onSubmit() {
        this.vm.loginBody.email = this.vm.email;
        this.vm.loginBody.password = this.vm.password;
        this.authService.login(this.vm.loginBody).subscribe({
            next: async (response: LoginResponseI) => {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                this.router.navigate(['/dashboard']);
            },
            error: (error: any) => {
                alert(error);
            },
        });
    }
}
