// import { LoginResponseI } from '@interfaces/login-response.interface';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginViewModel } from './model/login.view-model';
// import { AuthService } from '@services';

// @Component({
//     selector: 'app-login',
//     templateUrl: 'login.component.html',
//     styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent implements OnInit {
//     vm = new LoginViewModel();
//     constructor(private authService: AuthService, private router: Router) {}

//     ngOnInit() {
//         localStorage.getItem('token') && this.router.navigate(['/dashboard']);
//     }

//     async onSubmit() {
//         this.vm.loginBody.email = this.vm.email;
//         this.vm.loginBody.password = this.vm.password;
//         // this.authService.login(this.vm.loginBody).subscribe({
//         //     next: async (response: LoginResponseI) => {
//         //         localStorage.setItem('token', response.token);
//         //         localStorage.setItem('user', JSON.stringify(response.user));
//         //         this.router.navigate(['/dashboard']);
//         //     },
//         //     error: (error: any) => {
//         //         alert(error);
//         //     },
//         // });
//     }
// }

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/auth';
import { SnackBarService } from '@services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    isSubmitting = false;

    loginForm = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        rememberMe: [false],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private auth: AuthService,
        private snackbarService: SnackBarService
    ) {}

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    get rememberMe() {
        return this.loginForm.get('rememberMe');
    }

    login() {
        this.isSubmitting = true;

        this.auth
            .login(this.email?.value, this.password?.value)
            .pipe(filter((authenticated) => authenticated))
            .subscribe({
                next: () => this.router.navigateByUrl('/'),
                error: (error) => {
                    console.log(error);
                    this.isSubmitting = false;
                    this.snackbarService.open(error);
                },
            });
    }
}
