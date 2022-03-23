import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { UserCreateFakeDto, UserGetAllDto } from './dtos/user.dto';
import { Observable } from 'rxjs/internal/Observable';
import { PaginatorI } from 'src/app/interfaces/paginator.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  url = `${environment.urlApi}/users`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(
    data: UserGetAllDto
  ): Observable<{ items: UserGetAllDto[]; paginator: PaginatorI }> {
    return this.httpClient.post<{
      items: UserGetAllDto[];
      paginator: PaginatorI;
    }>(`${this.url}/all`, data, this.headers);
  }

  getOne(id: string): Observable<User> {
    return this.httpClient.post<User>(
      `${this.url}/one`,
      { id, site: 'admin' },
      this.headers
    );
  }

  create(data: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/create`, data, this.headers);
  }

  createFake(data: UserCreateFakeDto): Observable<{ message: string }> {
    return this.httpClient.post<{ message: string }>(
      `${this.url}/createFake`,
      data,
      this.headers
    );
  }

  update(data: User): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/update`, data, this.headers);
  }

  delete(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${this.url}/one/${id}`, this.headers);
  }

  deleteAllFake(): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(
      `${this.url}/allFake`,
      this.headers
    );
  }
}
