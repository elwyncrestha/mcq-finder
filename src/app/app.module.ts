import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ArrayIncludesPipe } from './pipes/array-includes.pipe';
import {FormsModule} from '@angular/forms';
import { FilterObservablePipe } from './pipes/filter-observable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArrayIncludesPipe,
    FilterObservablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
