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
                    this.isSubmitting = false;
                    this.snackbarService.open(error);
                },
            });
    }
}
