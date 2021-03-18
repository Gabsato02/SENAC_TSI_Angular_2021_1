import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './views/bindings/bindings.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    Exercicio01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
