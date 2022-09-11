import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!req.url.includes('/api/')) {
            return next.handle(req);
        }

        return next
            .handle(req)
            .pipe(mergeMap((event: HttpEvent<any>) => this.handleOkReq(event)));
    }

    private handleOkReq(event: HttpEvent<any>): Observable<any> {
        if (event instanceof HttpResponse) {
            const body: any = event.body;
            if (body && 'code' in body && body.code !== 0) {
                if (body.msg) {
                    console.error(body.msg);
                }
                return throwError(() => new Error());
            }
        }
        // Pass down event if everything is OK
        return of(event);
    }
}
