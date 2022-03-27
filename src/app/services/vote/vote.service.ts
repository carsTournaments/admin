import { IdDto } from 'src/app/core/dtos/id.dto';
import { PaginatorI } from './../../interfaces/paginator.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Vote } from 'src/app/models/vote.model';
import { VoteGetAllDto } from './dtos/vote.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VoteService {
  url = `${environment.urlApi}/votes`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(
    data: VoteGetAllDto
  ): Observable<{ items: Vote[]; paginator: PaginatorI }> {
    return this.httpClient.post<{ items: Vote[]; paginator: PaginatorI }>(
      `${this.url}/all`,
      data,
      this.headers
    );
  }

  getAllOfCar(data: IdDto): Observable<Vote[]> {
    return this.httpClient.post<Vote[]>(
      `${this.url}/allOfCar`,
      data,
      this.headers
    );
  }

  getAllOfTournament(data: IdDto): Observable<Vote[]> {
    return this.httpClient.post<Vote[]>(
      `${this.url}/allOfTournament`,
      data,
      this.headers
    );
  }

  getOne(id: string): Observable<Vote> {
    return this.httpClient.post<Vote>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: Vote): Observable<Vote> {
    return this.httpClient.post<Vote>(`${this.url}/create`, data, this.headers);
  }

  update(data: Vote): Observable<Vote> {
    return this.httpClient.put<Vote>(`${this.url}/update`, data, this.headers);
  }

  delete(id: string): Observable<Vote> {
    return this.httpClient.delete<Vote>(`${this.url}/one/${id}`, this.headers);
  }

  deleteAll(): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(
      `${this.url}/all`,
      this.headers
    );
  }
}
