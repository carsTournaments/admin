import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Report } from '@models/report.model';
import { GetAllDto, IdDto, IdSiteDto } from '@core/dtos/generic.dto';
import { PaginatorI } from '@interfaces';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReportService {
    url = `${environment.urlApi}/reports`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: GetAllDto
    ): Observable<{ items: Report[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{
                items: Report[];
                paginator: PaginatorI;
            }>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }

    getAllOfRound(data: IdDto): Observable<Report[]> {
        return this.httpClient
            .post<Report[]>(`${this.url}/allOfRound`, data)
            .pipe(take(1));
    }

    getAllOfTournament(data: IdDto): Observable<Report[]> {
        return this.httpClient
            .post<Report[]>(`${this.url}/allOfTournament`, data)
            .pipe(take(1));
    }

    getOne(data: IdSiteDto): Observable<Report> {
        return this.httpClient
            .post<Report>(`${this.url}/one`, data)
            .pipe(take(1));
    }

    create(data: Report): Observable<Report> {
        return this.httpClient
            .post<Report>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    update(data: Report): Observable<Report> {
        return this.httpClient
            .put<Report>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Report> {
        return this.httpClient
            .delete<Report>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<Report> {
        return this.httpClient.delete<Report>(`${this.url}/all`).pipe(take(1));
    }
}
