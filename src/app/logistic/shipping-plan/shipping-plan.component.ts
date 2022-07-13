import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Shipping } from 'src/app/models/shipping/shipping';
import { Service } from 'src/app/service/service.service';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CellarPorts } from 'src/app/models/cellar_ports/cellar_ports';



@Component({
  selector: 'app-shipping-plan',
  templateUrl: './shipping-plan.component.html',
  styleUrls: ['./shipping-plan.component.css']
})
export class ShippingPlanComponent implements OnInit {

  alerts!: Alert[];
  existClient !: boolean ;
  redirectRegister !: boolean ;
  closeResult = '';

  dniClient !: String;
  
  shipping : Shipping = new Shipping();
  formRegisterShipping !: FormGroup;

  cellarPorts !: CellarPorts [];

  constructor( public formBuilder:FormBuilder, private service: Service,private modalService: NgbModal, private router: Router) { 

    this.formRegisterShipping = this.formBuilder.group({
      logistic: ['', [Validators.required]],
      type_product: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      register_date: ['', [Validators.required]],
      delivery_date: ['', [Validators.required   ]],
      cellar_delivery: ['', [Validators.required]],
      id_transport: ['', [Validators.pattern("[a-zA-Z]{3}[0-9]{4}")]],
      id_flota: ['', [Validators.pattern("[a-zA-Z]{3}[0-9]{4}[a-zA-Z]{1}")]],
      dni_client: [],
      price: ['', [Validators.required ,Validators.pattern("[0-9]+")]],
      number_guide: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
     
  
    });

    this.existClient = false;
    this.redirectRegister = false;

    this,this.reset();
  }

  ngOnInit(): void {

    this.getCellarports();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  onSubmitShipping(): void {
    
    // agregar informacion del envio
    this.addShipping();
  }

  addShipping(){


    if (this.shipping.quantity > 10){

      if(this.shipping.logistic == 'Maritima'){
          this.shipping.price = this.shipping.price -(this.shipping.price*0.03);
      }else{
        this.shipping.price = this.shipping.price -(this.shipping.price*0.05);
      }

    }

    console.log(this.shipping);
    this.shipping.setDniClient(this.dniClient);

    this.service.addShipping(this.shipping).subscribe(res=>{
      
      console.log('formulaario completado con exito!');

     this.clearInputs();

     this.dniClient = '';
     this.existClient = false;
     
    },error=>console.log(error));

    
  }

  //metodo para verificar si el cliente existe

  findClient() {

    this.service.findClient(this.dniClient).subscribe(res=>{

      this.existClient = res;

      if(this.existClient == false){
        this.redirectRegister = true;
      }else{
        this.redirectRegister = false;
      }

      console.log(res);
    });
  }

  //METODO PARA ABRRIR EL MODAL

  open(content: any) {
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

  //metodo para limpiar los input
  clearInputs(){
    this.formRegisterShipping.reset(); 
   
  }

  getCellarports(){
    this.service.getcellarPorts().subscribe(data => {

      this.cellarPorts = data;
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
    type: 'danger',
    message: 'El Cliente no existe, antes debes registrarlo!',
  }, {
    type: 'success',
    message: 'El Cliente se encuentra registrado, ingrese los datos de envió',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];
