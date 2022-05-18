import { IdDto } from 'src/app/core/dtos/generic.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vote } from 'src/app/models/vote.model';
import { VoteGetAllDto } from './dtos/vote.dto';
import { Observable, take } from 'rxjs';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';

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

    getAllOfCar(data: any): Observable<Vote[]> {
        return this.httpClient
            .post<Vote[]>(`${this.url}/getAllOfCar`, data)
            .pipe(take(1));
    }

    getAllOfTournament(data: IdDto): Observable<Vote[]> {
        return this.httpClient
            .post<Vote[]>(`${this.url}/getAllOfTournament`, data)
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

    update(data: Vote): Observable<Vote> {
        return this.httpClient
            .put<Vote>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Vote> {
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
