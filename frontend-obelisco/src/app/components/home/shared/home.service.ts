import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class HomeService extends HttpClientService<any> {

    constructor(http: HttpClient) {
        super(http);
        this.serviceUrl = environment.obeliscoServiceUrl + '/home';
    }
}
