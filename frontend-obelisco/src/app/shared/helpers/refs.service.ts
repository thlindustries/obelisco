import { Injectable } from '@angular/core';
import { CepService } from '../services/cep.service';
import { CadastroService } from 'src/app/components/cadastro/shared/cadastro.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class RefsService {
    public constructor(
        public formBuilder: FormBuilder,
        public router: Router,
        public cepService: CepService,
        public cadastroService: CadastroService
    ) { }
}
