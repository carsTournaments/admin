import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Pairing } from 'src/app/models/pairing.model';
import { IdDto } from 'src/app/core/dtos/id.dto';
import { PairingGetAllDto } from './pairing.dto';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';

@Injectable({ providedIn: 'root' })
export class PairingService {
  url = `${environment.urlApi}/pairings`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(
    data: PairingGetAllDto
  ): Observable<{ items: Pairing[]; paginator: PaginatorI }> {
    return this.httpClient.post<{ items: Pairing[]; paginator: PaginatorI }>(
      `${this.url}/all`,
      data,
      this.headers
    );
  }

  getAllOfRound(data: IdDto): Observable<Pairing[]> {
    return this.httpClient.post<Pairing[]>(
      `${this.url}/allOfRound`,
      data,
      this.headers
    );
  }

  getAllOfTournament(data: IdDto): Observable<Pairing[]> {
    return this.httpClient.post<Pairing[]>(
      `${this.url}/allOfTournament`,
      data,
      this.headers
    );
  }

  getOne(id: string): Observable<Pairing> {
    return this.httpClient.post<Pairing>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: Pairing): Observable<Pairing> {
    return this.httpClient.post<Pairing>(
      `${this.url}/create`,
      data,
      this.headers
    );
  }

  update(data: Pairing): Observable<Pairing> {
    return this.httpClient.put<Pairing>(
      `${this.url}/update`,
      data,
      this.headers
    );
  }

  delete(id: string): Observable<Pairing> {
    return this.httpClient.delete<Pairing>(
      `${this.url}/one/${id}`,
      this.headers
    );
  }

  deleteAll(): Observable<Pairing> {
    return this.httpClient.delete<Pairing>(`${this.url}/all`, this.headers);
  }
}
