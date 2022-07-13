import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Shipping } from 'src/app/models/shipping/shipping';
import { Service } from 'src/app/service/service.service';

@Component({
  selector: 'app-index-shipping',
  templateUrl: './index-shipping.component.html',
  styleUrls: ['./index-shipping.component.css']
})
export class IndexShippingComponent implements OnInit {


  shipping : Shipping = new Shipping();
  listShipping !: Shipping [];
  
  page = 1;
  pageSize = 5;

  filter ='';
  constructor(config: NgbModalConfig, private modalService: NgbModal,private service:Service) {
  
  }

  open(content:any) {
    this.modalService.open(content);
  }


  ngOnInit(): void {

    this.getListSgipping();
  }

  getListSgipping(){

    this.service.getListShipping().subscribe(data =>{

      this.listShipping = data;
    });
  }

}
