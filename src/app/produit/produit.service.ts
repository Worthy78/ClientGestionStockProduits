import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.url.config';
import { Produit } from '../shared/produit';


@Injectable()
export class ProduitService {

  constructor(private http: HttpClient) {

  }

  getProduits(): Observable<any> {

    return this.http.get(API_URL.PRODUITS_URL);
  }

  addProduit(produit: Produit): Observable<any> {
    return this.http.post(API_URL.PRODUITS_URL, produit);
  }

  updateProduit(produit: Produit): Observable<any> {
    return this.http.put(API_URL.PRODUITS_URL, produit);
  }

  deleteProduit(ref: string): Observable<any> {
   return this.http.delete(API_URL.PRODUITS_URL + '/${ref}' );
  }
}
