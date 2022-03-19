import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { VotingGetAllDto } from './dtos/voting-get-all.dto';
import { Voting } from 'src/app/models/voting.model';
import { GenericGetAllI } from 'src/app/interfaces/generic-getall.interface';
import { VotingDeleteAllDto } from './dtos/voting-delete-all.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VotingService {
  url = `${environment.urlApi}/votings`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(data: VotingGetAllDto): Observable<GenericGetAllI<Voting>> {
    return this.httpClient.post<GenericGetAllI<Voting>>(
      `${this.url}/getAll`,
      data,
      this.headers
    );
  }

  getOne(id: string): Observable<Voting> {
    return this.httpClient.post<Voting>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: Voting): Observable<Voting> {
    return this.httpClient.post<Voting>(
      `${this.url}/create`,
      data,
      this.headers
    );
  }

  update(data: Voting): Observable<Voting> {
    return this.httpClient.put<Voting>(
      `${this.url}/update`,
      data,
      this.headers
    );
  }

  delete(id: string): Observable<Voting> {
    return this.httpClient.delete<Voting>(
      `${this.url}/one/${id}`,
      this.headers
    );
  }

  deleteAll(data: VotingDeleteAllDto): Observable<{ message: string }> {
    const url = data.id
      ? `${this.url}/all/${data.type}/${data.id}`
      : `${this.url}/all/${data.type}`;
    return this.httpClient.delete<{ message: string }>(url, this.headers);
  }
}
