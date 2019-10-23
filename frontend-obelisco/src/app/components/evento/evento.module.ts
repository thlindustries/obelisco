import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento.component';
import { EventoRouting } from './evento.routing';

@NgModule({
  imports: [
    CommonModule,
    EventoRouting
  ],
  declarations: [EventoComponent],
  providers: []
})
export class EventoModule { }
