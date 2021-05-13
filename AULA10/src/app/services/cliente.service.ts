import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(`${environment.apiEndpoint}cliente`);

  }

  inserir(cliente?: Cliente): Observable<Cliente> {

    if (!cliente) { return EMPTY; }

    return this.http.post<Cliente>(`${environment.apiEndpoint}cliente`, cliente);

  }

  atualizar(cliente?: Cliente): Observable<Cliente> {

    if (!cliente) { return EMPTY; }

    return this.http.put<Cliente>(`${environment.apiEndpoint}cliente/${cliente.id}`, cliente);

  }

  apagar(id: number): Observable<Cliente> {

    if (id <= 0) { return EMPTY; }

    return this.http.delete<Cliente>(`${environment.apiEndpoint}cliente/${id}`);

  }
}
