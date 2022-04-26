import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponseI } from 'src/app/interfaces/login-response.interface';
import { AuthLogInDto } from './auth.dto';
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    url = `${environment.urlApi}/auth`;
    constructor(private httpClient: HttpClient) {}

    login(data: AuthLogInDto): Observable<LoginResponseI> {
        return this.httpClient
            .post<LoginResponseI>(`${this.url}/login`, data)
            .pipe(take(1));
    }

    logout(): void {
        localStorage.clear();
    }

    setToken(token: string) {
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
