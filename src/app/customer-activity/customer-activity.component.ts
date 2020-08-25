import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-activity',
  templateUrl: './customer-activity.component.html',
  styleUrls: ['./customer-activity.component.css']
})
export class CustomerActivityComponent implements OnInit {
    phoneNumber : number;
  constructor(private route :  ActivatedRoute, private router:  Router) { }

  ngOnInit() {
    alert('CustomerActivityComponent');
  }

  submitDetails(phone : number){
     if(phone  != 0){    
      this.phoneNumber = phone;
      this.router.navigate(['/history'],  { state: {phone:this.phoneNumber} })
     }else{
       alert('Enter the correct phone number');
     }
  }

}
