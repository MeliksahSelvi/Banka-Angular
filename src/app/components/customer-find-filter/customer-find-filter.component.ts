import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerFindModel, CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-find-filter',
  templateUrl: './customer-find-filter.component.html',
  styleUrls: ['./customer-find-filter.component.scss']
})
export class CustomerFindFilterComponent {


  @Output() customersEmit:EventEmitter<CustomerFindModel[]>=new EventEmitter();

  customerFindFilterForm:FormGroup=this.fb.group({
    
    id:[
      '',
    ],
  })

  constructor(private fb:FormBuilder,private customerService:CustomerService){
    
  }

  submit() {

    const param=this.customerFindFilterForm.value as number;
    console.log('param',param)

    if(param!=undefined){
      
      this.customerService.findCustomerById(param).subscribe({
        next:(data:CustomerFindModel[])=>{
          this.customersEmit.emit(data)
        },
        error(err:Error){
          alert(err.message)
        },
      });
    }else{
      this.customerService.findAllCustomer().subscribe({
        next: (data: CustomerFindModel[]) => {
          this.customersEmit.emit(data)
        },
        error(err:Error){
          alert(err.message)
        },
      });
    }

    
  }
}
