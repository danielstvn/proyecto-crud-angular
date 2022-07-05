import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/cliente/client';
import { RegisterClientService } from 'src/app/service/register-client.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  client : Client = new Client();

  formRegisterClient !: FormGroup;


  constructor(private clienteService: RegisterClientService,private router: Router, public formBuilder:FormBuilder) { 

    this.formRegisterClient = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required],[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dni: ['', [Validators.required]],
      phone: ['', [Validators.required],[Validators.pattern("[0-9]{10}")]],
      location: ['', [Validators.required]],
      country: ['', [Validators.required]],
      province: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  addClient(){
    this.clienteService.addClient(this.client).subscribe(dato=>{
      console.log(dato);
    },error=>console.log(error));
    
  }

  ngOnInit(): void {

  }
  onSubmit(): void {
   //console.log(this.client);
   this.addClient();
  }

  

}
