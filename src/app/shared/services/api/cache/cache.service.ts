import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';
import { CacheGetAllI } from '@interfaces';

@Injectable({ providedIn: 'root' })
export class CacheService {
    url = `${environment.urlApi}/cache`;
    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<CacheGetAllI[]> {
        return this.httpClient
            .post<CacheGetAllI[]>(`${this.url}/getAll`, null)
            .pipe(take(1));
    }

    delete(id: string): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/all/`)
            .pipe(take(1));
    }
}
