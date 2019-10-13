import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { HomeService } from './shared/home.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting
  ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
