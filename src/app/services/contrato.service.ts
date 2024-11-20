import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root',
})
export class ContratoService {
  private baseUrl = 'http://localhost:8080/api/contratos';

  constructor(private http: HttpClient) {}

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.baseUrl);
  }

  getContratoById(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.baseUrl}/${id}`);
  }

  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.baseUrl, contrato);
  }

  updateContrato(id: number, contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.baseUrl}/${id}`, contrato);
  }

  deleteContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
