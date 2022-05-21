import { Menu } from './../bootstrap/menu.service';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject, iif, merge, of } from 'rxjs';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { isEmptyObject } from './helpers';
import { User } from '@models';
import { LoginResponseI } from '@interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private user$ = new BehaviorSubject({});
    private change$ = this.tokenService
        .change()
        .pipe(switchMap(() => this.assignUser()));

    constructor(
        private loginService: LoginService,
        private tokenService: TokenService
    ) {}

    init() {
        return new Promise<void>((resolve) =>
            this.change$.subscribe(() => resolve())
        );
    }

    change() {
        return this.change$;
    }

    check(): boolean {
        return this.tokenService.valid();
    }

    login(
        email: string,
        password: string,
        rememberMe = false
    ): Observable<boolean> {
        return this.loginService.login(email, password).pipe(
            tap((item: LoginResponseI) => this.tokenService.set(item.token)),
            map(() => this.check())
        );
    }

    logout(): void {
        this.tokenService.clear();
        !this.check();
    }

    user(): Observable<{}> {
        return this.user$.pipe(share());
    }

    menu(): Observable<Menu[] | never[]> {
        return iif(() => this.check(), this.loginService.menu(), of([]));
    }

    private assignUser(): any {
        if (!this.check()) {
            return of({}).pipe(
                tap((user) => this.user$.next(user)),
                share()
            );
        }
        if (!isEmptyObject(this.user$.getValue())) {
            return of(this.user$.getValue()).pipe(share());
        }
        return this.loginService.me().pipe(
            tap((user) => this.user$.next(user)),
            share()
        );
    }

    // deprecated

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token') as string;
    }

    getUser(): User {
        const data: string = localStorage.getItem('user')!;
        return JSON.parse(data) as User;
    }
}
