import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../models/cliente/client';
import { Observable, Subject, tap } from 'rxjs';
import { Shipping } from '../models/shipping/shipping';
import { CellarPorts } from '../models/cellar_ports/cellar_ports';


@Injectable({
  providedIn: 'root'
})
export class Service {

  url = 'http://localhost:8080/api/v1'; //

  private _refreshClient$ = new  Subject<void>();
  private _refreshCellarPorts$ = new  Subject<void>();

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

  get refreshAllCellarPorts$(){
    return this._refreshCellarPorts$;
  }


  // este metodo registra un  envio
  addShipping(shipping: Shipping): Observable<Object> {
    return this.httpClient.post(this.url.concat('/addShippingPlan'),shipping);

  }

  // metodo pára obtener la lista de envios

  getListShipping(): Observable<any> {
    return this.httpClient.get(this.url.concat('/getShipping'));
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

  findClient(dni: String): Observable<any> {
    return this.httpClient.get(this.url.concat('/findClient/') + dni);
  }


  // mmetodos para agregar una bodega o puerto

  addCellarPorts(cellar_ports:CellarPorts): Observable<Object> {
    return this.httpClient.post(this.url.concat('/addCellarPorts'),cellar_ports)
    .pipe(tap(() => {
        this._refreshCellarPorts$.next();
      }));
  }

  // metodo para obtener una liosta de bodegas y puertos

  getcellarPorts(): Observable<any> { 

    return this.httpClient.get(this.url.concat('/listCellarPorts'));
  }

  //metodo que obtiene la bodega o el puerto mediante el id

  getcellarPortId(id: number): Observable<any> {
    return this.httpClient.get(this.url.concat('/getcellarPortId/')+id);
  }

  // metodo para eliminar un cellar port
  deleteCellarPort(id: number): Observable<any> {
    return this.httpClient.delete(this.url.concat('/deleteCellarPort/')+id).
    pipe(tap(() => {
      this._refreshCellarPorts$.next();
    }));
  }

  //metodo para actualizar una bodega o puerto

  updateCellarPort(id: number,cellar_ports: CellarPorts): Observable<any> {
    return this.httpClient.put(this.url.concat('/updateCellarPort/') + id, cellar_ports)
      .pipe(tap(() => {
        this._refreshCellarPorts$.next();
      }));
  }
  

}
