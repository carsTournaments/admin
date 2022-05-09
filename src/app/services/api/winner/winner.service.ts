import { IdDto } from 'src/app/core/dtos/generic.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
import { WinnerGetAllDto } from './winner.dto';
import { Winner } from 'src/app/models/winner.model';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WinnerService {
    url = `${environment.urlApi}/winners`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: WinnerGetAllDto
    ): Observable<{ items: Winner[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{ items: Winner[]; paginator: PaginatorI }>(
                `${this.url}/all`,
                data
            )
            .pipe(take(1));
    }

    getAllForTournament(data: IdDto): Observable<Winner[]> {
        return this.httpClient
            .post<Winner[]>(`${this.url}/allForTournament`, data)
            .pipe(take(1));
    }

    getAllForCar(data: IdDto): Observable<Winner[]> {
        return this.httpClient
            .post<Winner[]>(`${this.url}/allForCar`, data)
            .pipe(take(1));
    }

    getForTournament(data: IdDto): Observable<Winner> {
        return this.httpClient
            .post<Winner>(`${this.url}/forTournament/`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Winner> {
        return this.httpClient
            .post<Winner>(`${this.url}/one`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: Winner): Observable<Winner> {
        return this.httpClient
            .post<Winner>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    update(data: Winner): Observable<Winner> {
        return this.httpClient
            .put<Winner>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    deleteOne(id: string): Observable<Winner> {
        return this.httpClient
            .delete<Winner>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<Winner> {
        return this.httpClient.delete<Winner>(`${this.url}/all`).pipe(take(1));
    }
}
