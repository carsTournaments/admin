import { IdDto } from 'src/app/core/dtos/id.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';
import { WinnerGetAllDto } from './winner.dto';
import { Winner } from 'src/app/models/winner.model';

@Injectable({ providedIn: 'root' })
export class WinnerService {
  url = `${environment.urlApi}/winners`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(
    data: WinnerGetAllDto
  ): Observable<{ items: Winner[]; paginator: PaginatorI }> {
    return this.httpClient.post<{ items: Winner[]; paginator: PaginatorI }>(
      `${this.url}/all`,
      data,
      this.headers
    );
  }

  getAllForTournament(data: IdDto): Observable<Winner[]> {
    return this.httpClient.post<Winner[]>(
      `${this.url}/allForTournament`,
      data,
      this.headers
    );
  }

  getAllForCar(data: IdDto): Observable<Winner[]> {
    return this.httpClient.post<Winner[]>(
      `${this.url}/allForCar`,
      data,
      this.headers
    );
  }

  getForTournament(data: IdDto): Observable<Winner> {
    return this.httpClient.post<Winner>(
      `${this.url}/forTournament/`,
      data,
      this.headers
    );
  }

  getOne(id: string): Observable<Winner> {
    return this.httpClient.post<Winner>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: Winner): Observable<Winner> {
    return this.httpClient.post<Winner>(
      `${this.url}/create`,
      data,
      this.headers
    );
  }

  update(data: Winner): Observable<Winner> {
    return this.httpClient.put<Winner>(
      `${this.url}/update`,
      data,
      this.headers
    );
  }

  delete(id: string): Observable<Winner> {
    return this.httpClient.delete<Winner>(
      `${this.url}/one/${id}`,
      this.headers
    );
  }

  deleteAll(): Observable<Winner> {
    return this.httpClient.delete<Winner>(`${this.url}/all`, this.headers);
  }
}
