import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, take } from 'rxjs';
import { GithubActionI } from './github-action.interface';
import { GithubIssueI } from './github-issue.interface';

@Injectable({ providedIn: 'root' })
export class GithubService {
    url = `${environment.urlApi}/github`;
    constructor(private httpClient: HttpClient) {}

    getAllActions(): Observable<GithubActionI[]> {
        return this.httpClient
            .get<GithubActionI[]>(`${this.url}/actions/all`)
            .pipe(take(1));
    }

    getAllIssues(): Observable<GithubIssueI[]> {
        return this.httpClient
            .get<GithubIssueI[]>(`${this.url}/issues/all`)
            .pipe(take(1));
    }
}
