import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Language, User, UserType } from 'src/model/User';

import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-landing2',
  templateUrl: './landing2.component.html',
  styleUrls: ['./landing2.component.css'],
  providers: [MessageService]
})
export class Landing2Component implements OnInit, AfterViewInit {


  userModel = new User();
  msgs: Message[] = [];


  constructor(
    private messageService: MessageService, private primengConfig: PrimeNGConfig){  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.userModel = JSON.parse(localStorage.getItem("user"));
   
  }

  ngAfterViewInit() {
    this.showViaService();
  }
  showViaService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Signed in successfully',
      detail: 'clear',
    });
  } 
}