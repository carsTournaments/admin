import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { InscriptionCreateDto, InscriptionGetAllDto } from './inscription.dto';
import { Inscription } from 'src/app/models/inscription.model';
import { IdDto } from 'src/app/core/dtos/id.dto';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
import { HttpService } from '../../http/http.service';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InscriptionService {
    url = `${environment.urlApi}/inscriptions`;
    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) {}

    getAll(
        data: InscriptionGetAllDto
    ): Observable<{ items: Inscription[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{
                items: Inscription[];
                paginator: PaginatorI;
            }>(`${this.url}/all`, data)
            .pipe(take(1));
    }

    getAllOfTournament(data: IdDto): Observable<Inscription[]> {
        return this.httpClient
            .post<Inscription[]>(`${this.url}/allOfTournament`, data)
            .pipe(take(1));
    }

    getAllOfCar(data: IdDto): Observable<Inscription[]> {
        return this.httpClient
            .post<Inscription[]>(`${this.url}/allOfCar`, data)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Inscription> {
        return this.httpClient
            .post<Inscription>(`${this.url}/one`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: InscriptionCreateDto): Observable<Inscription> {
        return this.httpClient
            .post<Inscription>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    forceInscriptions(data: IdDto): Observable<{ message: string }> {
        return this.httpClient
            .post<{
                message: string;
            }>(`${this.url}/forceInscriptions`, data)
            .pipe(take(1));
    }

    deleteOne(id: string): Observable<Inscription> {
        return this.httpClient
            .delete<Inscription>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAllOfCar(id: string): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/allOfCar/${id}`)
            .pipe(take(1));
    }

    deleteAllOfTournament(id: string): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/allOfTournament/${id}`)
            .pipe(take(1));
    }
}
