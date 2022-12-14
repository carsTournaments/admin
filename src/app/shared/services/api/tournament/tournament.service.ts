import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import {
    TournamentForceNextRoundDto,
    TournamentGetAllDto,
} from './tournament.dto';
import { take } from 'rxjs';
import { PaginatorI } from '@interfaces';
import { Tournament } from '@models';
import { IdDto } from '@core/dtos/generic.dto';

@Injectable({ providedIn: 'root' })
export class TournamentService {
    url = `${environment.urlApi}/tournaments`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: TournamentGetAllDto
    ): Observable<{ items: Tournament[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{
                items: Tournament[];
                paginator: PaginatorI;
            }>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Tournament> {
        return this.httpClient
            .post<Tournament>(`${this.url}/getOne`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: Tournament): Observable<Tournament> {
        return this.httpClient
            .post<Tournament>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    startTournament(data: IdDto): Observable<Tournament> {
        return this.httpClient
            .post<Tournament>(`${this.url}/startTournament`, data)
            .pipe(take(1));
    }

    resetTournament(data: IdDto): Observable<Tournament> {
        return this.httpClient
            .post<Tournament>(`${this.url}/resetTournament`, data)
            .pipe(take(1));
    }

    cancelTournament(data: IdDto): Observable<Tournament> {
        return this.httpClient
            .post<Tournament>(`${this.url}/cancelTournament`, data)
            .pipe(take(1));
    }

    forceNextRound(
        data: TournamentForceNextRoundDto
    ): Observable<{ message: string }> {
        return this.httpClient
            .post<{ message: string }>(`${this.url}/forceNextRound`, data)
            .pipe(take(1));
    }

    update(data: Tournament): Observable<Tournament> {
        return this.httpClient
            .put<Tournament>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Tournament> {
        return this.httpClient
            .delete<Tournament>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }
}
