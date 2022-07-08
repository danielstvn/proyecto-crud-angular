import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../models/cliente/client';
import { Observable, Subject, tap } from 'rxjs';
import { Shipping } from '../models/shipping/shipping';


@Injectable({
  providedIn: 'root'
})
export class Service {

  url = 'http://localhost:8080/api/v1'; //

  private _refreshClient$ = new  Subject<void>();

  constructor(private httpClient: HttpClient) { }


  // este metodo registra un cliente
  addClient(cliente: Client): Observable<Object> {
    return this.httpClient.post(this.url.concat('/registerUser'),cliente)
    .pipe(tap(() => {
        this._refreshClient$.next();
    }));

  }

  get refreshAllClient$(){
    return this._refreshClient$;
  }


  // este metodo registra un  envio
  addShipping(shipping: Shipping): Observable<Object> {
    return this.httpClient.post(this.url.concat('/addShippingPlan'),shipping);

  }

  // este metodo retorna un cliente por medio del id
  getClientId(id: number): Observable<any> {

    return this.httpClient.get(this.url.concat('/getClientid/') + id);
  }

  getClients(): Observable<any> {
    return this.httpClient.get(this.url.concat('/show'));
  }

  // este metodo actualizara un cliente

  updateClient(client:Client,id: number): Observable<any> { 

    return this.httpClient.put(this.url.concat('/updateClient/') + id, client)
    .pipe(tap(() => {
      this._refreshClient$.next();
  }));
  }

  deleteClient(id: number): Observable<any> { 

    return this.httpClient.delete(this.url.concat('/deleteClient/') + id)
    .pipe(tap(() => {
      this._refreshClient$.next();
  }));
  }

}
