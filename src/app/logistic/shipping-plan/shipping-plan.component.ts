import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Shipping } from 'src/app/models/shipping/shipping';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-shipping-plan',
  templateUrl: './shipping-plan.component.html',
  styleUrls: ['./shipping-plan.component.css']
})
export class ShippingPlanComponent implements OnInit {

  alerts!: Alert[];
  
  shipping : Shipping = new Shipping();
  formRegisterShipping !: FormGroup;

  constructor( public formBuilder:FormBuilder, private service: Service) { 

    this.formRegisterShipping = this.formBuilder.group({
      logistic: ['', [Validators.required]],
      type_product: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.pattern("[0-9]+")]],
      register_date: ['', [Validators.required]],
      delivery_date: ['', [Validators.required   ]],
      cellar_delivery: ['', [Validators.required]],
      id_transport: ['', [Validators.required]],
      dni_client: [],
      price: ['', [Validators.required ,Validators.pattern("[0-9]{6}")]],
      number_guide: ['', [Validators.required]],
     
  
    });
  }

  ngOnInit(): void {
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

    console.log(this.shipping);

    this.service.addShipping(this.shipping).subscribe(res=>{
      
      console.log('formulaario completado con exito!');
    },error=>console.log(error));

    
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
