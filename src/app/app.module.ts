import { Produit } from './shared/produit';
import { ProduitMockService } from './produit/produit.mock.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
