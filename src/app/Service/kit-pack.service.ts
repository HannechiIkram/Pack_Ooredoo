import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KitPack } from 'app/models/KitPack';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class KitPackService {

  private baseUrl = 'http://localhost:8082/api/kitpacks';

  constructor(private http: HttpClient) { }

  // Get all kit packs
  getAllKitPacks(): Observable<KitPack[]> {
    return this.http.get<KitPack[]>(this.baseUrl);
  }

  // Get kit pack by ID
  getKitPackById(id: number): Observable<KitPack> {
    return this.http.get<KitPack>(`${this.baseUrl}/${id}`);
  }

  // Create a new kit pack
  createKitPack(kitPack: KitPack): Observable<KitPack> {
    return this.http.post<KitPack>(this.baseUrl, kitPack, headers);
  }

  // Update an existing kit pack
  updateKitPack(id: number, kitPack: KitPack): Observable<KitPack> {
    return this.http.put<KitPack>(`${this.baseUrl}/${id}`, kitPack, headers);
  }

  // Delete a kit pack
  deleteKitPack(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
