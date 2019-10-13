import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from '../models/Model.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService<T extends Model> {

  protected serviceUrl: string;

  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.serviceUrl}`);
  }

  get(id: string): Observable<T> {
    return this.http.get<T>(`${this.serviceUrl}/${id}`);
  }

  post(data: T): Observable<T> {
    return this.http.post<T>(`${this.serviceUrl}`, data, httpOptions);
  }

  put(data: T): Observable<T> {
    return this.http.put<T>(`${this.serviceUrl}/${data.id}`, data, httpOptions);
  }

  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.serviceUrl}/${id}`);
  }
}
