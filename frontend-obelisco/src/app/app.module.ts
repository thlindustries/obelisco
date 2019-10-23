import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './shared/services/http-client.service';
import { CepService } from './shared/services/cep.service';
import { RefsService } from './shared/helpers/refs.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IConfig } from 'ngx-mask';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RefsService, HttpClientService, CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
