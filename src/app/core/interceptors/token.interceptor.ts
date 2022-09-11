import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '@core/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return next
            .handle(
                request.clone({
                    setHeaders: {
                        XSToken: this.tokenService.getToken(),
                    },
                })
            )
            .pipe(
                catchError((err) => {
                    if (err.status === 999) {
                        this.tokenService.clear();
                    }
                    const error = err.error.message || err.statusText;
                    return throwError(error);
                })
            );
    }
}
