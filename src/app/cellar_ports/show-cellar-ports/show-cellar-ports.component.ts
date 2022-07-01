import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-cellar-ports',
  templateUrl: './show-cellar-ports.component.html',
  styleUrls: ['./show-cellar-ports.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ShowCellarPortsComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content:any) {
    this.modalService.open(content);
  }

 

  ngOnInit(): void {
  }

}
