import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerLoginModel, CustomerLoginService } from 'src/app/service/customer-login.service';

@Component({
  templateUrl: './customer-login-page.component.html',
  styleUrls: ['./customer-login-page.component.scss']
})
export class CustomerLoginPageComponent {

  customerLoginForm:FormGroup=this.fb.group({
    
    identityNo:[
      '',
      [
        Validators.required,
        // Validators.pattern("^[0-9]*$"),
        // Validators.maxLength(11),
        // Validators.minLength(11)
      ]
    ],
    password:[
      '',
      [
        Validators.required,
        // Validators.minLength(6)
      ]
    ]
  })

  constructor(private fb:FormBuilder,private customerLoginService:CustomerLoginService){

  }

  submit(){
         
    const param=this.customerLoginForm.value as CustomerLoginModel;
    console.log('param',param)
    if(param!=undefined){
      this.customerLoginService.loginCustomer(param).subscribe({
        error(err:Error){
          alert(err.message)
        },
      });
    }
  }

  route(){
    window.location.href='/register'
  }
}
