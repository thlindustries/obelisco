import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CepService {

    constructor(private http: HttpClient) { }

    get(cep: string): Observable<any> {
        return this.http.get<any>(`${environment.cepServiceUrl}/${cep}/json/`, httpOptions);
    }
}
