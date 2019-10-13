import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CadastroService extends HttpClientService<any> {

    constructor(http: HttpClient) {
        super(http);
        this.serviceUrl = `${environment.obeliscoServiceUrl}/model.php`;
    }
}
