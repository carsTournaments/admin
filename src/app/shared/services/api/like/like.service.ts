import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatorI } from '@interfaces';
import { LikeGetAllDto } from './like.dto';
import { Like } from '@models/like.model';
import { take } from 'rxjs';
import { IdDto, SearchDto } from '@core/dtos/generic.dto';

@Injectable({ providedIn: 'root' })
export class LikeService {
    url = `${environment.urlApi}/likes`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: LikeGetAllDto
    ): Observable<{ items: Like[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{
                items: Like[];
                paginator: PaginatorI;
            }>(`${this.url}/getAll`, data)
            .pipe(take(1));
    }

    getAllReceivedForCar(data: IdDto): Observable<Like[]> {
        return this.httpClient
            .post<Like[]>(`${this.url}/getAllReceivedForCar`, data)
            .pipe(take(1));
    }

    getAllUserSubmittedLikes(data: IdDto): Observable<Like[]> {
        return this.httpClient
            .post<Like[]>(`${this.url}/getAllUserSubmittedLikes`, data)
            .pipe(take(1));
    }

    search(data: SearchDto): Observable<Like[]> {
        return this.httpClient
            .post<Like[]>(`${this.url}/search`, data)
            .pipe(take(1));
    }

    create(data: Like): Observable<Like> {
        return this.httpClient
            .post<Like>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    createFake(data: { total: number; carId?: string }): Observable<Like> {
        return this.httpClient
            .post<Like>(`${this.url}/createFake`, data)
            .pipe(take(1));
    }

    cleanLikes(): Observable<{ message: string }> {
        return this.httpClient
            .post<{ message: string }>(`${this.url}/cleanLikes`, null)
            .pipe(take(1));
    }

    deleteOne(id: string): Observable<Like> {
        return this.httpClient
            .delete<Like>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAll(): Observable<Like> {
        return this.httpClient.delete<Like>(`${this.url}/all`).pipe(take(1));
    }
}
