import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Settings } from 'src/app/models';
import { environment } from 'src/environments/environment';
import { SettingsCheckUpdateDto } from './settings.dto';
import { VersionSettingsI } from './settings.response';

@Injectable({ providedIn: 'root' })
export class SettingsService {
    url = `${environment.urlApi}/settings`;
    constructor(private httpClient: HttpClient) {}

    getAll(): Observable<Settings> {
        return this.httpClient
            .post<Settings>(`${this.url}/getAll`, null)
            .pipe(take(1));
    }

    checkUpdate(data: SettingsCheckUpdateDto): Observable<VersionSettingsI> {
        return this.httpClient
            .post<VersionSettingsI>(`${this.url}/checkUpdate`, data)
            .pipe(take(1));
    }

    update(data: Settings): Observable<Settings> {
        return this.httpClient
            .put<Settings>(`${this.url}/update`, data)
            .pipe(take(1));
    }
}
