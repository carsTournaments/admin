import { PaginatorI } from './../../interfaces/paginator.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { ImageGetAllDto, ImageUploadDto } from './image.dto';
import { Image } from 'src/app/models/image.model';

@Injectable({ providedIn: 'root' })
export class ImageService {
  url = `${environment.urlApi}/images`;
  headers = { headers: this.httpService.getHeaderWithToken() };
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService
  ) {}

  getAll(
    data: ImageGetAllDto
  ): Observable<{ items: Image[]; paginator: PaginatorI }> {
    const url = `${this.url}/all`;
    return this.httpClient.post<{ items: Image[]; paginator: PaginatorI }>(
      url,
      data,
      this.headers
    );
  }

  getOne(id: string): Observable<Image> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Image>(url, this.headers);
  }

  upload(data: ImageUploadDto, file: File): Observable<any> {
    const url = `${this.url}/upload`;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', data.type);
    formData.append('id', data.id);
    return this.httpClient.post<any>(url, formData, this.headers);
  }

  update(data: Image): Observable<any> {
    const url = `${this.url}/update`;
    return this.httpClient.post<any>(url, data, this.headers);
  }
}
