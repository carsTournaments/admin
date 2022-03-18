import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Pairing } from 'src/app/models/pairing.model';

@Injectable({ providedIn: 'root' })
export class PairingService {
    url = `${environment.urlApi}/pairings`;
    headers = { headers: this.httpService.getHeaderWithToken() };
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) { }

    getAll(): Observable<Pairing[]> {
        return this.httpClient
            .post<Pairing[]>(`${this.url}/all`, null, this.headers);
    }

    getOne(id: string): Observable<Pairing> {
        return this.httpClient
            .post<Pairing>(`${this.url}/one`, { id, site: 'admin' }, this.headers);
    }

    create(data: Pairing): Observable<Pairing> {
        return this.httpClient
            .post<Pairing>(`${this.url}/create`, data, this.headers);
    }

    update(data: Pairing): Observable<Pairing> {
        return this.httpClient
            .put<Pairing>(`${this.url}/update`, data, this.headers);
    }

    delete(id: string): Observable<Pairing> {
        return this.httpClient
            .delete<Pairing>(`${this.url}/one/${id}`, this.headers);
    }
}
