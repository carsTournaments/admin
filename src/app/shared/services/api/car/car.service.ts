import { IdDto } from '@core/dtos/generic.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { CarCreateFakeDto, CarGetAllDto } from './car.dto';
import { Car } from '@models/car.model';
import { PaginatorI } from '@interfaces';
import { take } from 'rxjs';
import { CarStatsI } from './car.interface';

@Injectable({ providedIn: 'root' })
export class CarService {
    url = `${environment.urlApi}/cars`;
    constructor(private httpClient: HttpClient) {}

    getAll(
        data: CarGetAllDto
    ): Observable<{ items: Car[]; paginator: PaginatorI }> {
        return this.httpClient
            .post<{ items: Car[]; paginator: PaginatorI }>(
                `${this.url}/getAll`,
                data
            )
            .pipe(take(1));
    }

    getAllBrandCars(data: IdDto): Observable<Car[]> {
        return this.httpClient
            .post<Car[]>(`${this.url}/getAllBrandCars`, data)
            .pipe(take(1));
    }

    getAllDriverCars(data: IdDto): Observable<Car[]> {
        return this.httpClient
            .post<Car[]>(`${this.url}/getAllDriverCars`, data)
            .pipe(take(1));
    }

    getCarStats(): Observable<CarStatsI[]> {
        return this.httpClient
            .post<CarStatsI[]>(`${this.url}/getCarStats`, null)
            .pipe(take(1));
    }

    getOne(id: string): Observable<Car> {
        return this.httpClient
            .post<Car>(`${this.url}/one`, { id, site: 'admin' })
            .pipe(take(1));
    }

    create(data: Car): Observable<Car> {
        return this.httpClient
            .post<Car>(`${this.url}/create`, data)
            .pipe(take(1));
    }

    createFake(data: CarCreateFakeDto): Observable<{ message: string }> {
        return this.httpClient
            .post<{ message: string }>(`${this.url}/createFake`, data)
            .pipe(take(1));
    }

    update(data: Car): Observable<Car> {
        return this.httpClient
            .put<Car>(`${this.url}/update`, data)
            .pipe(take(1));
    }

    delete(id: string): Observable<Car> {
        return this.httpClient
            .delete<Car>(`${this.url}/one/${id}`)
            .pipe(take(1));
    }

    deleteAllFake(): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/allFake`)
            .pipe(take(1));
    }

    deleteAllFakeWithoutPhoto(): Observable<{ message: string }> {
        return this.httpClient
            .delete<{ message: string }>(`${this.url}/allFakeWithoutPhoto`)
            .pipe(take(1));
    }
}
