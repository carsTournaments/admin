import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';
import { AnalyticsGetVisitsDto } from './analytics.dto';
import {
    AnalyticsGetEventsWithCategoriesResponse,
    AnalyticsGetVisitsResponse,
} from './analytics.response';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
    url = `${environment.urlApi}/analytics`;
    dates = [
        { name: 'Hoy', value: 'today' },
        { name: 'Últimos 3 días', value: '3daysAgo' },
        { name: 'Últimos 7 días', value: '7daysAgo' },
        { name: 'Últimos 15 días', value: '15daysAgo' },
        { name: 'Últimos 30 días', value: '30daysAgo' },
        { name: 'Últimos 60 días', value: '60daysAgo' },
        { name: 'Últimos 90 días', value: '90daysAgo' },
    ];
    constructor(private httpClient: HttpClient) {}

    getVisits(
        data: AnalyticsGetVisitsDto
    ): Observable<AnalyticsGetVisitsResponse[]> {
        return this.httpClient
            .post<AnalyticsGetVisitsResponse[]>(`${this.url}/getVisits`, data)
            .pipe(take(1));
    }

    getEventsWithCategories(
        data: AnalyticsGetVisitsDto
    ): Observable<AnalyticsGetEventsWithCategoriesResponse[]> {
        return this.httpClient
            .post<AnalyticsGetEventsWithCategoriesResponse[]>(
                `${this.url}/getEventsWithCategories`,
                data
            )
            .pipe(take(1));
    }
}
