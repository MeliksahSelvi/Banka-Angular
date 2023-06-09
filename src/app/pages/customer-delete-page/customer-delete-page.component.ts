import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  templateUrl: './customer-delete-page.component.html',
  styleUrls: ['./customer-delete-page.component.scss']
})
export class CustomerDeletePageComponent {


  customerDeleteForm:FormGroup=this.fb.group({
    
    id:[
      '',
    ],
  })
  
  constructor(private fb:FormBuilder,private customerService:CustomerService){
    
  }

  submit() {
    const param=this.customerDeleteForm.value as number;

    if(param !=undefined){
      this.customerService.deleteCustomer(param).subscribe({
        next:(response: any)=>{
          alert('Silme Başarılı')
      },
        error(err:Error){
          alert(err.message)
        },
      })
    }
  }
}
