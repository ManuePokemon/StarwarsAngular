import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';
import { StarwarsServiceService } from './services/starwars-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClient
  ],
  providers: [StarwarsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
