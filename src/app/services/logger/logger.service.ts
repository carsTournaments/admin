import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { LoggerGetAllDto } from './dtos/logger-get-all.dto';
import { LogsGetAllI } from 'src/app/interfaces/logs-getAll.interface';

@Injectable({ providedIn: 'root' })
export class LoggerService {
    url = `${environment.urlApi}/logger`;
    headers = { headers: this.httpService.getHeaderWithToken() };
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) { }

    getAll(data: LoggerGetAllDto): Observable<LogsGetAllI> {
        return this.httpClient.post<LogsGetAllI>(`${this.url}/getAll`, data, this.headers);
    }
}