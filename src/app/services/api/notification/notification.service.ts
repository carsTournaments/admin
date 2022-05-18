import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GetAllDto } from 'src/app/core/dtos/generic.dto';
import { environment } from 'src/environments/environment';
import { NotificationCreateDto } from './notification.dto';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    url = `${environment.urlApi}/notifications`;
    constructor(private httpClient: HttpClient) {}

    getAll(data: GetAllDto): Observable<any> {
        return this.httpClient.post(`${this.url}/getAll`, data).pipe(take(1));
    }

    create(data: NotificationCreateDto): Observable<{ message: string }> {
        return this.httpClient
            .post<{ message: string }>(`${this.url}/create`, data)
            .pipe(take(1));
    }
}
