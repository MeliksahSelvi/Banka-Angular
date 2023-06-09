import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerSaveModel} from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.scss']
})
export class CustomerSaveComponent {

  @Output() customersEmit:EventEmitter<CustomerSaveModel>=new EventEmitter();

  customerSaveForm:FormGroup=this.fb.group({
    
    name:[
      '',
      [
        Validators.required
      ]
    ],
    surName:[
      '',
      [
        Validators.required
      ]
    ],
    identityNo:[
      '',
      [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(11),
        Validators.minLength(11)
      ]
    ],
    password:[
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]
  })
  constructor(private fb:FormBuilder){

  }

  submit(){
         
    const param=this.customerSaveForm.value as CustomerSaveModel;
    console.log('param',param)
    this.customersEmit.emit(param)
  }
}
