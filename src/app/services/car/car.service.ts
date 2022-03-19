import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { CarGetAllDto } from './car.dto';
import { Car } from 'src/app/models/car.model';

@Injectable({ providedIn: 'root' })
export class CarService {
  url = `${environment.urlApi}/cars`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(data: CarGetAllDto): Observable<Car[]> {
    return this.httpClient.post<Car[]>(`${this.url}/all`, data, this.headers);
  }

  getAllOffBrand(): Observable<Car[]> {
    return this.httpClient.post<Car[]>(
      `${this.url}/allOfBrand`,
      null,
      this.headers
    );
  }

  getAllOfDriver(): Observable<Car[]> {
    return this.httpClient.post<Car[]>(
      `${this.url}/allOfBrand`,
      null,
      this.headers
    );
  }

  getOne(id: string): Observable<Car> {
    return this.httpClient.post<Car>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${this.url}/create`, data, this.headers);
  }

  update(data: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${this.url}/update`, data, this.headers);
  }

  delete(id: string): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.url}/one/${id}`, this.headers);
  }
}
