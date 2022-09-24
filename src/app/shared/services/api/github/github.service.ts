import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, take } from 'rxjs';
import { GithubActionsI } from './github-action.interface';
import { GithubIssuesI } from './github-issue.interface';

@Injectable({ providedIn: 'root' })
export class GithubService {
    url = `${environment.urlApi}/github`;
    constructor(private httpClient: HttpClient) {}

    getAllActions(): Observable<GithubActionsI[]> {
        return this.httpClient
            .get<GithubActionsI[]>(`${this.url}/actions/all`)
            .pipe(take(1));
    }

    getAllIssues(): Observable<GithubIssuesI[]> {
        return this.httpClient
            .get<GithubIssuesI[]>(`${this.url}/issues/all`)
            .pipe(take(1));
    }
}
