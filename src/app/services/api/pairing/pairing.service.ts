import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Pairing } from 'src/app/models/pairing.model';
import { IdDto, IdSiteDto } from 'src/app/core/dtos/generic.dto';
import { PairingGetAllDto } from './pairing.dto';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
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
            }>(`${this.url}/all`, data)
            .pipe(take(1));
    }

    getAllOfRound(data: IdDto): Observable<Pairing[]> {
        return this.httpClient
            .post<Pairing[]>(`${this.url}/allOfRound`, data)
            .pipe(take(1));
    }

    getAllOfTournament(data: IdDto): Observable<Pairing[]> {
        return this.httpClient
            .post<Pairing[]>(`${this.url}/allOfTournament`, data)
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
