import { Produit } from './../shared/produit';
import { ProduitService } from './produit.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

    produits: Produit[];

    produitForm: FormGroup;

    operation: string = 'add';

    selectedProduit: Produit;

    constructor(private produitService: ProduitService, private fb: FormBuilder) {
      this.createForm();
    }

    ngOnInit() {
      this.initProduit();
      this.loadProduits();
    }

    createForm() {
      this.produitForm = this.fb.group({
        ref: ['', Validators.required],
        quantite: ['', Validators.required],
        prixUnitaire: ['', Validators.required]
      });
    }

    loadProduits() {
      this.produitService.getProduits().subscribe(
        data => { this.produits = data },
        error => { console.log('An error as occured.')},
        () => { console.log('loading produits was done.')}
      );
    }

    addProduit() {
      const p = this.produitForm.value;
      this.produitService.addProduit(p).subscribe(
        res => {
          this.initProduit();
          this.loadProduits();
        }
      );
    }

    updateProduit() {
      this.produitService.updateProduit(this.selectedProduit).subscribe(
        res => {
          this.initProduit();
          this.loadProduits();
        }
      );
    }

    initProduit() {
      this.selectedProduit = new Produit();
      this.createForm();
    }
}
