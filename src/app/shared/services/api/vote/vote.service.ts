import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoteGetAllDto, VoteGetAllOfGenericDto } from './dtos/vote.dto';
import { Observable, take } from 'rxjs';
import { environment } from '@env/environment';
import { PaginatorI } from '@interfaces';
import { Vote } from '@models';

@Injectable({ providedIn: 'root' })
export class VoteService {
    url = `${environment.urlApi}/votes`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: VoteGetAllDto
    ): Observable<{ items: Vote[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{ items: Vote[]; paginator: PaginatorI }>(
                `${this.url}/getAll`,
                data
            )
            .pipe(take(1));
    }

    getAllCarVotes(data: VoteGetAllOfGenericDto): Observable<Vote[]> {
        return this.httpClient
            .post<Vote[]>(`${this.url}/getAllCarVotes`, data)
            .pipe(take(1));
    }

    getAllTournamentVotes(data: VoteGetAllOfGenericDto): Observable<Vote[]> {
        return this.httpClient
            .post<Vote[]>(`${this.url}/getAllTournamentVotes`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Vote> {
        return this.httpClient
            .post<Vote>(`${this.url}/getOne`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: Vote): Observable<Vote> {
        return this.httpClient
            .post<Vote>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    deleteOne(id: string): Observable<Vote> {
        return this.httpClient
            .delete<Vote>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/all`)
            .pipe(take(1));
    }
}
