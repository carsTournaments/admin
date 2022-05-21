import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '@core/auth';
import { BASE_URL } from './base-url-interceptor';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private hasHttpScheme = (url: string) =>
        new RegExp('^http(s)?://', 'i').test(url);

    constructor(
        private tokenService: TokenService,
        private router: Router,
        @Optional() @Inject(BASE_URL) private baseUrl?: string
    ) {}

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
                        return throwError(error);
                    } else {
                        if (error.status === 999) {
                            this.tokenService.clear();
                        }
                        return throwError(error);
                    }
                })
            );

        // return next.handle(request).pipe(tap(() => handler()));
    }

    private shouldAppendToken(url: string) {
        return !this.hasHttpScheme(url) || this.includeBaseUrl(url);
    }

    private includeBaseUrl(url: string) {
        if (!this.baseUrl) {
            return false;
        }

        const baseUrl = this.baseUrl.replace(/\/$/, '');

        return new RegExp(`^${baseUrl}`, 'i').test(url);
    }
}
