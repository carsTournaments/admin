import { PaginatorI } from './../../interfaces/paginator.interface';
import { IdDto } from 'src/app/core/dtos/id.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { TournamentGetAllDto } from './tournament.dto';
import { Tournament } from 'src/app/models/tournament.model';

@Injectable({ providedIn: 'root' })
export class TournamentService {
    url = `${environment.urlApi}/tournaments`;
    headers = { headers: this.httpService.getHeaderWithToken() };
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) {}

    getAll(
        data: TournamentGetAllDto
    ): Observable<{ items: Tournament[]; paginator: PaginatorI }> {
        return this.httpClient.post<{
            items: Tournament[];
            paginator: PaginatorI;
        }>(`${this.url}/all`, data, this.headers);
    }

    getOne(id: string): Observable<Tournament> {
        return this.httpClient.post<Tournament>(
            `${this.url}/one`,
            { id, site: 'admin' },
            this.headers
        );
    }

    create(data: Tournament): Observable<Tournament> {
        return this.httpClient.post<Tournament>(
            `${this.url}/create`,
            data,
            this.headers
        );
    }

    startTournament(data: IdDto): Observable<Tournament> {
        return this.httpClient.post<Tournament>(
            `${this.url}/startTournament`,
            data,
            this.headers
        );
    }

    resetTournament(data: IdDto): Observable<Tournament> {
        return this.httpClient.post<Tournament>(
            `${this.url}/resetTournament`,
            data,
            this.headers
        );
    }

    update(data: Tournament): Observable<Tournament> {
        return this.httpClient.put<Tournament>(
            `${this.url}/update`,
            data,
            this.headers
        );
    }

    delete(id: string): Observable<Tournament> {
        return this.httpClient.delete<Tournament>(
            `${this.url}/one/${id}`,
            this.headers
        );
    }
}
