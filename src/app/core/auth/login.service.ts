import { LoginResponseI } from '@interfaces/login-response.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Menu } from '@core/bootstrap/menu.service';
import { User } from '@models';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(protected http: HttpClient) {}

    login(email: string, password: string, rememberMe = false) {
        return this.http.post<LoginResponseI>('/auth/login', {
            email,
            password,
            rememberMe,
        });
    }

    logout() {
        return this.http.post<any>('/auth/logout', {});
    }

    me() {
        return this.http.get<User>('/me');
    }

    menu(): Observable<Menu[]> {
        return this.http
            .post<{ menu: Menu[] }>('/menu', { site: 'admin' })
            .pipe(map((res) => res.menu));
    }
}
