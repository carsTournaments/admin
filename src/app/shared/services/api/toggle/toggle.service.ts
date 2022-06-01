import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';
import { Toggle } from '@models';

@Injectable({ providedIn: 'root' })
export class ToggleService {
    url = `${environment.urlApi}/toggles`;
    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<Toggle[]> {
        return this.httpClient
            .post<Toggle[]>(`${this.url}/getAll`, null)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Toggle> {
        return this.httpClient
            .post<Toggle>(`${this.url}/getOne`, { id })
            .pipe(take(1));
    }

    create(data: Toggle): Observable<Toggle> {
        return this.httpClient
            .post<Toggle>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    update(data: Toggle): Observable<Toggle> {
        return this.httpClient
            .put<Toggle>(`${this.url}/update`, data)
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
