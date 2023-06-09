import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginService } from 'src/app/service/customer-login.service';
import { CustomerSaveModel } from 'src/app/service/customer.service';

@Component({
  templateUrl: './customer-register-page.component.html',
  styleUrls: ['./customer-register-page.component.scss']
})
export class CustomerRegisterPageComponent {

  savedCustomer?:CustomerSaveModel;

  constructor(private loginService:CustomerLoginService,private routerService:Router){
    
  }

  setResponse(customersEvent:any){

    if(customersEvent!=undefined){

      this.loginService.registerCustomer(customersEvent).subscribe({
        next:(data:CustomerSaveModel)=>{
          this.savedCustomer=data
          console.log('data',this.savedCustomer)
          alert("Login Ekranına Yönlendiriliyorsunuz...")
          const promise=new Promise((resolve,reject) =>{
            setTimeout(() => {
              this.routerService.navigate(['/']);
            }, 1500);
          })
        },
        error(err:Error){
          alert(err.message)
        },
      })
    }
  }
}
