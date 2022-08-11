import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { WinnerGetAllDto } from './winner.dto';
import { take } from 'rxjs';
import { IdDto } from '@core/dtos/generic.dto';
import { environment } from '@env/environment';
import { PaginatorI } from '@shared/interfaces/paginator.interface';
import { Winner } from '@models';

@Injectable({ providedIn: 'root' })
export class WinnerService {
    url = `${environment.urlApi}/winners`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: WinnerGetAllDto
    ): Observable<{ items: Winner[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{ items: Winner[]; paginator: PaginatorI }>(
                `${this.url}/getAll`,
                data
            )
            .pipe(take(1));
    }

    getAllTournamentWinners(data: IdDto): Observable<Winner[]> {
        return this.httpClient
            .post<Winner[]>(`${this.url}/getAllTournamentWinners`, data)
            .pipe(take(1));
    }

    getAllCarWinners(data: IdDto): Observable<Winner[]> {
        return this.httpClient
            .post<Winner[]>(`${this.url}/getAllCarWinners`, data)
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
