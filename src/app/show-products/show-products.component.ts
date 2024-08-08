import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'app/models/Produit';
import { ProduitService } from 'app/Service/produit.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  produits: Produit[] = [];
  centreId: number;

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupérez l'ID du centre à partir du sessionStorage ou de la route
    const storedCentreId = sessionStorage.getItem('selectedCentreId');
    if (storedCentreId) {
      this.centreId = +storedCentreId;
      this.loadProduits();
    } else {
      this.route.paramMap.subscribe(params => {
        this.centreId = +params.get('centreId')!;
        this.loadProduits();
      });
    }
  }

  loadProduits(): void {
    this.produitService.getProduitsByCentre(this.centreId).subscribe(
      (data: Produit[]) => {
        this.produits = data;
        console.log('Produits chargés:', this.produits); // Pour déboguer
      },
      error => console.error('Erreur lors de la récupération des produits', error)
    );
  }
}