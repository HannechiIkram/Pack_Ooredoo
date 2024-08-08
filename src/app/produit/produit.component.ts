import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'app/Service/produit.service';
import { CentreService } from 'app/Service/centre.service'; // Assurez-vous d'avoir un service pour les centres
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  selectedFile: File = null;
  centres: any[] = []; // Liste des centres récupérée depuis le serveur
  centreName: string; // Nom du centre sélectionné

  constructor(
    private produitService: ProduitService,
    private centreService: CentreService // Injection du service pour récupérer les centres
  ) {}

  ngOnInit(): void {
    this.loadCentres(); // Charger les centres au démarrage du composant
  }

  loadCentres() {
    this.centreService.getAllCentres().subscribe(
      response => {
        this.centres = response;
      },
      error => {
        console.error('Erreur lors de la récupération des centres', error);
      }
    );
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form) {
    const centreAdresse = this.centreName; // Nom du centre sélectionné
    const { name } = form.value;

    if (this.selectedFile) {
      this.produitService.createProduit(centreAdresse, name, this.selectedFile).subscribe(
        response => {
          console.log('Produit créé avec succès', response);
        },
        error => {
          console.error('Erreur lors de la création du produit', error);
        }
      );
    }
  }
}
