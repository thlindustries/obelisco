import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from '../models/Model.model';
import { map, catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService<T extends Model> {

  protected serviceUrl: string;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.serviceUrl}`)
      .pipe(map((res: any) => res.json()), catchError(this.errorHandle));
  }

  public get(id: string): Observable<T> {
    return this.http.get<T>(`${this.serviceUrl}/${id}`)
      .pipe(map((res: any) => res.json()), catchError(this.errorHandle));
  }

  public post(data: T): Observable<T> {
    return this.http.post<T>(`${this.serviceUrl}`, JSON.stringify(data), httpOptions)
      .pipe(map((res: any) => res.json()), catchError(this.errorHandle));
  }

  public put(data: T): Observable<T> {
    return this.http.put<T>(`${this.serviceUrl}/${data.id}`, JSON.stringify(data), httpOptions)
      .pipe(map((res: any) => res.json()), catchError(this.errorHandle));
  }

  public delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.serviceUrl}/${id}`)
      .pipe(map((res: any) => res.json()), catchError(this.errorHandle));
  }

  public errorHandle(error): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
