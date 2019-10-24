import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRouting } from './cadastro.routing';
import { CadastroComponent } from './cadastro.component';
import { CadastroService } from './shared/cadastro.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { options } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    CadastroRouting,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  declarations: [CadastroComponent],
  providers: [CadastroService]
})
export class CadastroModule { }
