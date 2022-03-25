import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ImageUploadDto } from './image.dto';

@Injectable({ providedIn: 'root' })
export class ImageService {
  url = `${environment.urlApi}/images`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  upload(data: ImageUploadDto, file: File): Observable<any> {
    const url = `${this.url}/upload`;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', data.type);
    formData.append('id', data.id);
    return this.httpClient.post<any>(url, formData, this.headers);
  }
}
