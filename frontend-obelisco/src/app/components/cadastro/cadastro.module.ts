import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRouting } from './cadastro.routing';
import { CadastroComponent } from './cadastro.component';
import { CadastroService } from './shared/cadastro.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    CadastroRouting,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [CadastroComponent],
  providers: [CadastroService]
})
export class CadastroModule { }
