import { Component, OnInit } from '@angular/core';
import { EnderecoModel } from 'src/app/shared/models/Endereco.model';
import { RefsService } from 'src/app/shared/helpers/refs.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public initialModel: EnderecoModel;
  public form: FormGroup;
  public formControls: {
    cep: FormControl,
    logradouro: FormControl,
    complemento: FormControl,
    bairro: FormControl,
    localidade: FormControl,
    uf: FormControl
  };

  constructor(private refs: RefsService) { }

  ngOnInit() {
    this.buildForm(new EnderecoModel());
  }

  public buildForm(model: EnderecoModel): void {
    this.initialModel = model;

    this.formControls = {
      cep: new FormControl('', Validators.required),
      logradouro: new FormControl({ value: undefined, disabled: true }),
      complemento: new FormControl({ value: undefined, disabled: true }),
      bairro: new FormControl({ value: undefined, disabled: true }),
      localidade: new FormControl({ value: undefined, disabled: true }),
      uf: new FormControl({ value: undefined, disabled: true })
    };

    this.form = this.refs.formBuilder.group(this.formControls);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const model = this.form.getRawValue() as EnderecoModel;

      console.log(model);
    }
  }

  public onFoundCEP(): void {
    const cep = this.formControls.cep.value;

    if (cep) {
      this.refs.cepService.get(cep).subscribe((res: EnderecoModel) => {
        this.formControls.cep.setValue(res.cep);
        this.formControls.logradouro.setValue(res.logradouro);
        this.formControls.complemento.setValue(res.complemento);
        this.formControls.bairro.setValue(res.bairro);
        this.formControls.localidade.setValue(res.localidade);
        this.formControls.uf.setValue(res.uf);
      },
        err => console.log('CEP Inválido - ERRO: ', err)
      );
    } else {
      console.log('CEP Inválido');
    }
  }
}
