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
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/auth';

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
        private auth: AuthService
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
            .login(
                this.email?.value,
                this.password?.value,
                this.rememberMe?.value
            )
            .pipe(filter((authenticated) => authenticated))
            .subscribe({
                next: () => this.router.navigateByUrl('/'),
                error: (errorRes: HttpErrorResponse) => {
                    if (errorRes.status === 422) {
                        const form = this.loginForm;
                        const errors = errorRes.error.errors;
                        Object.keys(errors).forEach((key) => {
                            form.get(
                                key === 'email' ? 'username' : key
                            )?.setErrors({
                                remote: errors[key][0],
                            });
                        });
                    }
                    this.isSubmitting = false;
                },
            });
    }
}
