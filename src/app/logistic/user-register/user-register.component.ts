import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

import { Client } from 'src/app/models/cliente/client';
import { Service } from 'src/app/service/service.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  alerts!: Alert[];

  closeResult = '';

  client : Client = new Client();
  listClient !: Client [];
  infoClient: Client = new Client();

  page = 1;
  pageSize = 5;

  filterClient ='';
  sizeListClients !: number;


  formRegisterClient !: FormGroup;


  public dniClient !: String ;

  public isCollapsed = true;

  public isSubmited !:boolean ; 
  public isSubmitedShippig !:boolean ;

  // variable para la suscripcion

  suscribe!:Subscription;


  constructor(private service: Service,private router: Router, public formBuilder:FormBuilder, private ativateRoute:ActivatedRoute, private modalService: NgbModal) { 

    this.formRegisterClient = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dni: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      phone: ['', [Validators.required ,Validators.pattern("[0-9]{10}")]],
      location: ['', [Validators.required]],
      country: ['', [Validators.required]],
      province: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postal_code: ['', [Validators.required ,Validators.pattern("[0-9]+")]],
  
    });

      this.isSubmited = false;
      this.isSubmitedShippig = false;
      this.reset();
 

  }

  // este metodo permite abrir un modal

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //metodo que muestra el modal show

  openShow(contentShow:any,id: number) {

    //obtener la informacion del cliente con el id seleccionado

    console.log(id);
    this.getClientId(id);
   
    

    this.modalService.open(contentShow, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //este metodo muestra el modal de edicion de un cliente

  openEdit(content:any, id :number) {

    this.getClientId(id);


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  // este metodo abre el modal de Eliminacion

  openDelete(content:any, id :number) {

    this.getClientId(id);


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  addClient(){
    this.service.addClient(this.client).subscribe(res=>{
      
      this.isCollapsed = false;

    },error=>console.log(error));
    
    this.dniClient = this.client.dni;

    this.isSubmited = true;

    this.formRegisterClient.reset();

    this.getClient();
  }

  getClient()  {

    this.service.getClients().subscribe(data =>{
      this.listClient = data;

      this.sizeListClients = this.listClient.length;
    })

  }
  getClientId(id:number) {
    this.service.getClientId(id).subscribe(data =>{
      

      this.infoClient = data;

      console.log(this.infoClient);
    },err => console.log(err)); 
  }

  editClient(id:number) {

    this.service.updateClient(this.infoClient,id).subscribe(data =>{

      console.log(data);
      console.log('formulario actualizado');
    });

    this.suscribe = this.service.refreshAllClient$.subscribe(data =>{
      this.getClient();
    });

  };

  deleteClient(id:number) {

    this.service.deleteClient(id).subscribe(data =>{  
      console.log(data);
      console.log('registro eliminado');
    });

    this.suscribe = this.service.refreshAllClient$.subscribe(data =>{
      this.getClient();
    });

  }

  
  

  ngOnInit(): void {
  
    this.getClient(); 

    this.suscribe = this.service.refreshAllClient$.subscribe(data =>{
      this.getClient();
    });

  }

  onSubmit(): void {
   
      //agregar client
      this.addClient();
  }

  onUpdate(id:number): void {
    this.editClient(id);

  }
  //
 

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }



  

}


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'Formulario de Registro de Usuario Completado!!',
  }, {
    type: 'success',
    message: 'Formulario de Registro de Envio completado!!',
  }, {
    type: 'info',
    message: 'Registre todos los datos del Cliente solicitados en el Fomulario',
  }, {
    type: 'info',
    message: 'Registre todos los datos del Envió',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];
