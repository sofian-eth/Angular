import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { Erc721Component } from './erc721/erc721.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    Erc721Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      disableTimeOut:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
