import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './base-url.interceptor';
import { TokenInterceptor } from './token.interceptor';

export * from './noop.interceptor';
export * from './base-url.interceptor';
export * from './token.interceptor';
export * from './default.interceptor';
export * from './error.interceptor';
export * from './logging.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
];
