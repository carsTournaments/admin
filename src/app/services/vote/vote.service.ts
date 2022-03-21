import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Vote } from 'src/app/models/vote.model';
import { VotingDeleteAllDto } from './dtos/vote.dto';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VoteService {
  url = `${environment.urlApi}/votes`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(): Observable<Vote[]> {
    return this.httpClient.post<Vote[]>(`${this.url}/all`, null, this.headers);
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

  deleteAll(data: VotingDeleteAllDto): Observable<{ message: string }> {
    const url = data.id
      ? `${this.url}/all/${data.type}/${data.id}`
      : `${this.url}/all/${data.type}`;
    return this.httpClient.delete<{ message: string }>(url, this.headers);
  }
}
