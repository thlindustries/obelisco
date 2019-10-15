import { Component, OnInit } from '@angular/core';
import { EnderecoModel } from 'src/app/shared/models/Endereco.model';
import { RefsService } from 'src/app/shared/helpers/refs.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  SERVER_URL = "http://192.168.240.203:8000/model.php";
  //uploadForm: FormGroup; 

  private formBuilder: FormBuilder; 
  private httpClient: HttpClient;
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
    
    // this.form = this.formBuilder.group({
    //   profile: ['']
    // });
    // this.uploadForm = this.formBuilder.group({
    //   profile: ['']
    // });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
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
  

  public onSubmit() : void {
    if (this.form.valid) {
      const model = this.form.getRawValue() as EnderecoModel;

      //const dados = { model };
      // {no:nome,em:email,id:idade,cu:curso,tel:telefone,ce:cep,lo:logradouro,ba:bairro,loc:localidade,nu:numero};

      // const formData = new FormData();
      // formData.append('file', this.form.get('profile').value);

      // this.httpClient.post<any>(this.SERVER_URL, model).subscribe(
      //   (res) => console.log(res),
      //   (err) => console.log(err)
      // );
      //var dados = {model:model};
      //console.log(dados);
      // {no:nome,em:email,id:idade,cu:curso,tel:telefone,ce:cep,lo:logradouro,ba:bairro,loc:localidade,nu:numero};

      this.refs.cadastroService.post(model).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
      // this.httpClient.post(this.SERVER_URL,model).subscribe(
      //   res => console.log(res),
      //   err => console.log(err)
      // );

      // try {
      //   $.post('http://192.168.240.203:8000/model.php',dados,function(data)
      //   {
      //       var obj = jQuery.parseJSON(data);
      //       //var obj = data;
      //       //$("#teste").text(""+obj);
      //       console.log(obj);

      //   });
      // }
      // catch(err) {
      //   //$("#teste").text(err.message);
      // }
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

