import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
import { LikeGetAllDto } from './like.dto';
import { Like } from 'src/app/models/like.model';

@Injectable({ providedIn: 'root' })
export class LikeService {
    url = `${environment.urlApi}/likes`;
    headers = { headers: this.httpService.getHeaderWithToken() };
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) {}

    getAll(
        data: LikeGetAllDto
    ): Observable<{ items: Like[]; paginator: PaginatorI }> {
        return this.httpClient.post<{
            items: Like[];
            paginator: PaginatorI;
        }>(`${this.url}/getAll`, data, this.headers);
    }

    create(data: Like): Observable<Like> {
        return this.httpClient.post<Like>(
            `${this.url}/create`,
            data,
            this.headers
        );
    }

    createFake(total: number): Observable<Like> {
        return this.httpClient.post<Like>(
            `${this.url}/createFake`,
            { total },
            this.headers
        );
    }

    delete(id: string): Observable<Like> {
        return this.httpClient.delete<Like>(
            `${this.url}/one/${id}`,
            this.headers
        );
    }

    deleteAll(): Observable<Like> {
        return this.httpClient.delete<Like>(`${this.url}/all`, this.headers);
    }
}
