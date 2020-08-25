import { Component, OnInit, Input } from '@angular/core';
import { CustomerHistory } from '../model/customer-history';
import { CustomerService } from '../service/customer-service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {
phone :  number;
  customerHistory: CustomerHistory[];
  constructor(private customerService: CustomerService,   private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  const phone = history.state.phone;  
    this.getHistory(phone);
  }
  getHistory(phone: number) {
   this.customerService.getCustomerHistory(phone)
   .subscribe((histories: CustomerHistory[]) => this.customerHistory = histories);
  }

}
