import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      HttpModule,
      PagesModule,
      RouterModule,
      BrowserModule,
      MatInputModule,
      AppRoutingModule,
      MatFormFieldModule,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
