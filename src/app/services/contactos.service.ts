import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  private url = 'http://localhost:3000/contactos';
  constructor(private httpClient: HttpClient) {}

  read(): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(this.url);
  }
  create(contacto: Contacto) {
    return this.httpClient.post(this.url, contacto);
  }
  update(contacto: Contacto) {
    return this.httpClient.put(`${this.url}/${contacto.id}`, contacto);
  }
  delete(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
