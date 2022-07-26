import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Pairing } from '@models/pairing.model';
import { IdDto, IdSiteDto } from '@core/dtos/generic.dto';
import { PairingGetAllDto } from './pairing.dto';
import { PaginatorI } from '@interfaces';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PairingService {
    url = `${environment.urlApi}/pairings`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: PairingGetAllDto
    ): Observable<{ items: Pairing[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{
                items: Pairing[];
                paginator: PaginatorI;
            }>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }

    getAllOfTournament(data: IdDto): Observable<Pairing[]> {
        return this.httpClient
            .post<Pairing[]>(`${this.url}/getAllTournamentPairings`, data)
            .pipe(take(1));
    }

    getOne(data: IdSiteDto): Observable<Pairing> {
        return this.httpClient
            .post<Pairing>(`${this.url}/one`, data)
            .pipe(take(1));
    }

    create(data: Pairing): Observable<Pairing> {
        return this.httpClient
            .post<Pairing>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    update(data: Pairing): Observable<Pairing> {
        return this.httpClient
            .put<Pairing>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Pairing> {
        return this.httpClient
            .delete<Pairing>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<Pairing> {
        return this.httpClient.delete<Pairing>(`${this.url}/all`).pipe(take(1));
    }
}
