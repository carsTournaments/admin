import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from 'src/app/services/api/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) {}
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        const user = this.authService.getUser();
        if (token && user.role === 'ADMIN') {
            request = request.clone({
                setHeaders: {
                    XSToken: `${token}`,
                },
            });
        } else {
            this.authService.logout();
        }
        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 999) {
                    this.authService.logout();
                }
                const error = err.error.message || err.statusText;
                return throwError(() => new Error(error));
            })
        );
    }
}
