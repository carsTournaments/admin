import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';
import { AnalyticsGetVisitsDto } from './analytics.dto';
import { AnalyticsGetVisitsResponse } from './analytics.response';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
    url = `${environment.urlApi}/analytics`;
    constructor(private httpClient: HttpClient) {}

    getVisits(
        data: AnalyticsGetVisitsDto
    ): Observable<AnalyticsGetVisitsResponse[]> {
        return this.httpClient
            .post<AnalyticsGetVisitsResponse[]>(`${this.url}/getVisits`, data)
            .pipe(take(1));
    }
}
