import { Component } from '@angular/core';
import { CustomerFindModel } from 'src/app/service/customer.service';

export interface Customer{
  id:number;
  name:string;
  surName:string;
  identityNo:string;
  password:string;
}

@Component({
  templateUrl: './customer-find-page.component.html',
  styleUrls: ['./customer-find-page.component.scss']
})
export class CustomerFindPageComponent{

  customers:CustomerFindModel[]=[]


  setCustomers(customersEvent:any){
    console.log('data',customersEvent)
    this.customers=customersEvent.data
  }
}
