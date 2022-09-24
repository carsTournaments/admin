import { Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { LogGetAllDto } from './dtos/log-get-all.dto';
import { LogI } from './log.interface';

@Injectable({ providedIn: 'root' })
export class LogService {
    url = `${environment.urlApi}/logs`;
    constructor(private httpClient: HttpClient) {}

    getAll(data: LogGetAllDto): Observable<LogI[]> {
        let params = `${data.type}`;
        if (data.order) {
            params += `/${data.order}`;
        }
        return this.httpClient
            .get<LogI[]>(`${this.url}/getAll/${params}`)
            .pipe(take(1));
    }
}
