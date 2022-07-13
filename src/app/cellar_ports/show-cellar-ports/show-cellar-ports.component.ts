import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { NgbModalConfig, NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { CellarPorts } from 'src/app/models/cellar_ports/cellar_ports';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-cellar-ports',
  templateUrl: './show-cellar-ports.component.html',
  styleUrls: ['./show-cellar-ports.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ShowCellarPortsComponent implements OnInit {

  cellarPort: CellarPorts = new CellarPorts(); 
  infocellarPort: CellarPorts = new CellarPorts(); 
  listCellarPorts !: CellarPorts [];

  alerts!: Alert[];

  closeResult = '';

  public isCollapsed = true;

  public isSubmited !:boolean ; 

    // variable para la suscripcion

    suscribe!:Subscription;


  formRegistercellarPort !: FormGroup;

  constructor(config: NgbModalConfig, private modalService: NgbModal,public formBuilder:FormBuilder, private service:Service) {
    this.formRegistercellarPort = this.formBuilder.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      location: ['', [Validators.required]],
      availability: ['', [Validators.required]],
      
     
      
  
    });

    this.isCollapsed = false;
    this.isSubmited = false;

    this.reset();
  }

 

 

  ngOnInit(): void {

    this.getListCellarports();

    this.suscribe = this.service.refreshAllCellarPorts$.subscribe(data =>{
      this.getListCellarports();
    });
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

    this.getCellarport(id);
   
   
    

    this.modalService.open(contentShow, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //este metodo muestra el modal de edicion de un cliente

  openEdit(content:any, id :number) {


    this.getCellarport(id);


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // este metodo abre el modal de Eliminacion

  openDelete(content:any, id :number) {


    this.getCellarport(id);


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


  onSubmit(): void{

    this.addCellarPorts();
    

  }

  onUpdate(id:number):void{

   
    this.editCellarport(id); 

  }

  deletecellar_port(id:number){

    this.service.deleteCellarPort(id).subscribe(data =>{
      console.log('registro eliminado');
    });

    this.suscribe = this.service.refreshAllCellarPorts$.subscribe(data =>{
      this.getListCellarports();
    });
  

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }


  // metodo para agregar un puerto o bodega

  addCellarPorts(){

    console.log(this.cellarPort);

    this.service.addCellarPorts(this.cellarPort).subscribe(data =>{

      console.log('Fomulario enviado');
    });

    this.formRegistercellarPort.reset();
    
  }

  // metodo para obtener una lista de puertos y bodegas

  getListCellarports(){
    this.service.getcellarPorts().subscribe(data =>{

      this.listCellarPorts = data;
    });
  }

  // metodo que obtiene una bodega o puerto mediante el id

  getCellarport(id: number) {


    this.service.getcellarPortId(id).subscribe(data =>{
      this.infocellarPort = data;
      console.log(this.infocellarPort);
    });
  }

  // metodo para actualizar un registro

  editCellarport(id: number) {
   
    this.service.updateCellarPort(id,this.infocellarPort).subscribe(data =>{
      console.log('Formulario actualizado');
    });
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

