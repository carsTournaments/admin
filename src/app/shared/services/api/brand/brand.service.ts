import { BrandGetAllDto } from './brand.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Brand } from '@models/brand.model';
import { PaginatorI } from '@interfaces';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BrandService {
    url = `${environment.urlApi}/brands`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: BrandGetAllDto
    ): Observable<{ items: Brand[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{ items: Brand[]; paginator: PaginatorI }>(
                `${this.url}/getAll`,
                data
            )
            .pipe(take(1));
    }

    getOne(id: string): Observable<Brand> {
        return this.httpClient
            .post<Brand>(`${this.url}/one`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: Brand): Observable<Brand> {
        return this.httpClient
            .post<Brand>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    update(data: Brand): Observable<Brand> {
        return this.httpClient
            .put<Brand>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Brand> {
        return this.httpClient
            .delete<Brand>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }
}
