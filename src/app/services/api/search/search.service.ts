import { SearchDto } from './search.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
    url = `${environment.urlApi}/search`;
    constructor(private httpClient: HttpClient) {}

    getAll(data: SearchDto): Observable<any> {
        return this.httpClient.post(`${this.url}/all`, data).pipe(take(1));
    }
}
