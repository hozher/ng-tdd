import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HomeComponent]
})
export class CoreModule { }
