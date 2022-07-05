import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../models/cliente/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  url = 'http://localhost:8080/api/v1/registerUser'; //

  constructor(private httpClient: HttpClient) { }


  // este metodo registra un cliente
  addClient(cliente: Client): Observable<Object> {
    return this.httpClient.post(this.url,cliente);

  }

}
