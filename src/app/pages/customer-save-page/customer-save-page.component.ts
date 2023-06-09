import { Component } from '@angular/core';
import { CustomerSaveModel, CustomerService } from 'src/app/service/customer.service';

@Component({
  templateUrl: './customer-save-page.component.html',
  styleUrls: ['./customer-save-page.component.scss']
})
export class CustomerSavePageComponent {

  savedCustomer?:CustomerSaveModel;

  constructor(private customerService:CustomerService){
    
  }

  setResponse(customersEvent:any){

    if(customersEvent!=undefined){

      this.customerService.saveCustomer(customersEvent).subscribe({
        next:(data:CustomerSaveModel)=>{
          this.savedCustomer=data
          console.log('data',this.savedCustomer)
        },
        error(err:Error){
          alert(err.message)
        },
      })
    }
  }
}
