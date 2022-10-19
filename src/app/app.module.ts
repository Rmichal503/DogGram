import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { DogViewComponent } from './components/dog-view/dog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
