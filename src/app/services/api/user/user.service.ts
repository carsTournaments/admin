import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { UserCreateFakeDto, UserGetAllDto } from './dtos/user.dto';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    url = `${environment.urlApi}/users`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: UserGetAllDto
    ): Observable<{ items: User[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{
                items: User[];
                paginator: PaginatorI;
            }>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<User> {
        return this.httpClient
            .post<User>(`${this.url}/one`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: User): Observable<User> {
        return this.httpClient
            .post<User>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    createFake(data: UserCreateFakeDto): Observable<{ message: string }> {
        return this.httpClient
            .post<{ message: string }>(`${this.url}/createFake`, data)
            .pipe(take(1));
    }

    update(data: User): Observable<User> {
        return this.httpClient
            .put<User>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<User> {
        return this.httpClient
            .delete<User>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAllFake(): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/allFake`)
            .pipe(take(1));
    }
}
