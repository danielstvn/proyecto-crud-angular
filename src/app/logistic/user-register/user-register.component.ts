import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/cliente/client';
import { RegisterClientService } from 'src/app/service/register-client.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  client : Client = new Client();


  constructor(private clienteService: RegisterClientService,private router: Router) { }

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
