import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root',
})
export class ContratoService {
  private baseUrl = 'http://localhost:8080/api/contratos';

  constructor(private http: HttpClient) {}

  getContratos(): Observable<contrato[]> {
    return this.http.get<contrato[]>(this.baseUrl);
  }

  getContratoById(id: number): Observable<contrato> {
    return this.http.get<contrato>(`${this.baseUrl}/${id}`);
  }

  createContrato(contrato: contrato): Observable<contrato> {
    return this.http.post<contrato>(this.baseUrl, contrato);
  }

  updateContrato(id: number, contrato: contrato): Observable<contrato> {
    return this.http.put<contrato>(`${this.baseUrl}/${id}`, contrato);
  }

  deleteContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
