import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { InscriptionCreateDto, InscriptionGetAllDto } from './inscription.dto';
import { Inscription } from 'src/app/models/inscription.model';
import { IdDto } from 'src/app/core/dtos/id.dto';

@Injectable({ providedIn: 'root' })
export class InscriptionService {
  url = `${environment.urlApi}/inscriptions`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(data: InscriptionGetAllDto): Observable<Inscription[]> {
    return this.httpClient.post<Inscription[]>(
      `${this.url}/all`,
      data,
      this.headers
    );
  }

  getAllOfTournament(data: IdDto): Observable<Inscription[]> {
    return this.httpClient.post<Inscription[]>(
      `${this.url}/allOfTournament`,
      data,
      this.headers
    );
  }

  getAllOfCar(data: IdDto): Observable<Inscription[]> {
    return this.httpClient.post<Inscription[]>(
      `${this.url}/allOfCar`,
      data,
      this.headers
    );
  }

  getOne(id: string): Observable<Inscription> {
    return this.httpClient.post<Inscription>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: InscriptionCreateDto): Observable<Inscription> {
    return this.httpClient.post<Inscription>(
      `${this.url}/create`,
      data,
      this.headers
    );
  }

  forceInscriptions(data: IdDto): Observable<{ message: string }> {
    return this.httpClient.post<{
      message: string;
    }>(`${this.url}/forceInscriptions`, data, this.headers);
  }

  delete(id: string): Observable<Inscription> {
    return this.httpClient.delete<Inscription>(
      `${this.url}/one/${id}`,
      this.headers
    );
  }

  deleteAllOfCar(id: string): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(
      `${this.url}/allOfCar/${id}`,
      this.headers
    );
  }

  deleteAllOfTournament(id: string): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(
      `${this.url}/allOfTournament/${id}`,
      this.headers
    );
  }
}
