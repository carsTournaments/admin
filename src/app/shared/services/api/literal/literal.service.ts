import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';
import { Literal } from '@models';
import { GenericGetAllI } from '@interfaces';
import { GetAllDto } from '@core/dtos/generic.dto';

@Injectable({ providedIn: 'root' })
export class LiteralService {
    url = `${environment.urlApi}/literals`;
    constructor(private httpClient: HttpClient) {}

    getAll(data: GetAllDto): Observable<GenericGetAllI<Literal[]>> {
        return this.httpClient
            .post<GenericGetAllI<Literal[]>>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Literal> {
        return this.httpClient
            .post<Literal>(`${this.url}/getOne`, { id })
            .pipe(take(1));
    }

    create(data: Literal): Observable<Literal> {
        return this.httpClient
            .post<Literal>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    update(data: Literal): Observable<Literal> {
        return this.httpClient
            .put<Literal>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }
}
