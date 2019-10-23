import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/shared/models/User.model';

@Injectable({
    providedIn: 'root'
})
export class CadastroService extends HttpClientService<UserModel> {

    constructor(http: HttpClient) {
        super(http);
        this.serviceUrl = `${environment.obeliscoServiceUrl}/model.php`;
    }
}
