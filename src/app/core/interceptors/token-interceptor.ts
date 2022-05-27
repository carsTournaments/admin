import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
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
                catchError((error: HttpErrorResponse) => {
                    if (error.error instanceof ErrorEvent) {
                        console.error('Error Event', error);
                        return throwError(() => new Error(error.message));
                    } else {
                        if (error.status === 999) {
                            this.tokenService.clear();
                        }
                        return throwError(() => new Error(error.message));
                    }
                })
            );
    }
}
