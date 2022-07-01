import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../models/cliente/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/user_register'; ///user_register

  // este metodo registra un cliente
  public addClient(cliente:Client): Observable<Object> {
    return this.httpClient.post(`${this.url}`,cliente);

  }

}
