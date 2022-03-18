import { IdDto } from 'src/app/core/dtos/id.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Round } from 'src/app/models/round.model';

@Injectable({ providedIn: 'root' })
export class RoundService {
    url = `${environment.urlApi}/rounds`;
    headers = { headers: this.httpService.getHeaderWithToken() };
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) { }

    getAll(): Observable<Round[]> {
        return this.httpClient
            .post<Round[]>(`${this.url}/all`, null, this.headers);
    }

    getOne(id: string): Observable<Round> {
        return this.httpClient
            .post<Round>(`${this.url}/one`, { id, site: 'admin' }, this.headers);
    }

    create(data: Round): Observable<Round> {
        return this.httpClient
            .post<Round>(`${this.url}/create`, data, this.headers);
    }

    startRound(data: IdDto): Observable<Round> {
        return this.httpClient
            .post<Round>(`${this.url}/startRound`, data, this.headers);
    }

    update(data: Round): Observable<Round> {
        return this.httpClient
            .put<Round>(`${this.url}/update`, data, this.headers);
    }

    delete(id: string): Observable<Round> {
        return this.httpClient
            .delete<Round>(`${this.url}/one/${id}`, this.headers);
    }
}
