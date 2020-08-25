import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private  router :  Router) { }

  ngOnInit() {
  }
  openCustomerlogin(){   
    this.router.navigate(['/customer']);
  }
}
