import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';
import { Ota } from '@models';

@Injectable({ providedIn: 'root' })
export class OtaService {
    url = `${environment.urlApi}/ota`;
    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<Ota[]> {
        return this.httpClient
            .post<Ota[]>(`${this.url}/getAll`, null)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Ota> {
        return this.httpClient
            .post<Ota>(`${this.url}/getOne`, { id })
            .pipe(take(1));
    }

    update(data: Ota): Observable<Ota> {
        return this.httpClient
            .put<Ota>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/all`)
            .pipe(take(1));
    }
}
