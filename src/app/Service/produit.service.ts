import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produit } from 'app/models/Produit';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:8082/api/produits';

  constructor(private http: HttpClient) { }

  // Get all products
  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }

  // Get product by ID
  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.baseUrl}/${id}`);
  }
  getProduitsByCentre(centreId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8082/api/produits/getproduit/${centreId}`);
  }

  // Create a new product
  // createProduit(produit: Produit): Observable<Produit> {
  //   return this.http.post<Produit>(this.baseUrl, produit, headers);
  // }

  // Update an existing product
  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.baseUrl}/${id}`, produit, headers);
  }

  // Delete a product
  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Get products by centre ID
  getProduitsByCentreId(centreId: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}/centre/${centreId}`);
  }



  createProduit(centreName: string, name: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('centreName', centreName);
    formData.append('name', name);
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/affecter-produit-centre`, formData);
  }
}