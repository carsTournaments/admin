import { Observable } from 'rxjs';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StatsGetResumeDto } from './dtos/stats-get-all.dto';
import { StatsResumeI } from 'src/app/interfaces/stats.interface';

@Injectable({ providedIn: 'root' })
export class StatsService {
  url = `${environment.urlApi}/stats`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getResume(data: StatsGetResumeDto): Observable<StatsResumeI[]> {
    return this.httpClient.post<StatsResumeI[]>(
      `${this.url}/getResume`,
      data,
      this.headers
    );
  }
}
