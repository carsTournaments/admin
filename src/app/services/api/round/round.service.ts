import { IdDto } from 'src/app/core/dtos/generic.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Round } from 'src/app/models/round.model';
import { RoundGetAllDto } from './round.dto';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoundService {
    url = `${environment.urlApi}/rounds`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        body: RoundGetAllDto
    ): Observable<{ items: Round[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{ items: Round[]; paginator: PaginatorI }>(
                `${this.url}/getAll`,
                body
            )
            .pipe(take(1));
    }

    getAllOfTournament(data: IdDto): Observable<Round[]> {
        return this.httpClient
            .post<Round[]>(`${this.url}/allOfTournament`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Round> {
        return this.httpClient
            .post<Round>(`${this.url}/one`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: Round): Observable<Round> {
        return this.httpClient
            .post<Round>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    startRound(data: IdDto): Observable<Round> {
        return this.httpClient
            .post<Round>(`${this.url}/startRound`, data)
            .pipe(take(1));
    }

    update(data: Round): Observable<Round> {
        return this.httpClient
            .put<Round>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Round> {
        return this.httpClient
            .delete<Round>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAllOfTournament(id: string): Observable<Round> {
        return this.httpClient
            .delete<Round>(`${this.url}/allOfTournament/${id}`)
            .pipe(take(1));
    }
}
