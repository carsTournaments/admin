import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { LoggerGetAllDto } from './dtos/logger-get-all.dto';
import { LogsGetAllI } from '@interfaces/logs-getAll.interface';

@Injectable({ providedIn: 'root' })
export class LoggerService {
    url = `${environment.urlApi}/logger`;
    constructor(private httpClient: HttpClient) {}

    getAll(data: LoggerGetAllDto): Observable<LogsGetAllI> {
        return this.httpClient
            .post<LogsGetAllI>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }
}
