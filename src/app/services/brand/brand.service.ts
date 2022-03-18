import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Brand } from 'src/app/models/brand.model';

@Injectable({ providedIn: 'root' })
export class BrandService {
    url = `${environment.urlApi}/brands`;
    headers = { headers: this.httpService.getHeaderWithToken() };
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) { }

    getAll(): Observable<Brand[]> {
        return this.httpClient
            .post<Brand[]>(`${this.url}/all`, null, this.headers);
    }

    getOne(id: string): Observable<Brand> {
        return this.httpClient
            .post<Brand>(`${this.url}/one`, { id, site: 'admin' }, this.headers);
    }

    create(data: Brand): Observable<Brand> {
        return this.httpClient
            .post<Brand>(`${this.url}/create`, data, this.headers);
    }

    update(data: Brand): Observable<Brand> {
        return this.httpClient
            .put<Brand>(`${this.url}/update`, data, this.headers);
    }

    delete(id: string): Observable<Brand> {
        return this.httpClient
            .delete<Brand>(`${this.url}/one/${id}`, this.headers);
    }
}
