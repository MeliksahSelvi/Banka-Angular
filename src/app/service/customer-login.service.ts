import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, take, tap } from 'rxjs';
import { CustomerSaveModel } from './customer.service';
import { Router } from '@angular/router';

export interface CustomerLoginModel{
  identityNo:number,
  password:string,
}

export interface JwtToken{
  userId:number;
  token:string;
  tokenIssuedTime:number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {

  constructor(private httpClient:HttpClient,private routerService:Router) { }

  loginCustomer(loginModel:CustomerLoginModel):Observable<any>{
    return this.httpClient
    .post<any>('http://localhost:8080/auth/login',loginModel)
    .pipe(
      take(1),
      tap((jwtToken:JwtToken)=>{
        console.log('result',jwtToken);
        let token=jwtToken.token;
        if(token!=undefined){
          localStorage.setItem('accessToken',token);
        }

        setTimeout(() => {
          this.routerService.navigate(['/customer']);
        }, 2000);


      }),
      catchError((err : any) =>{
          console.log('err',err)

          let errObject;

          if(err.status==404){
            errObject={
              message:'Tc Kimlik No veya Parola Hatalı'
            }
          }

          return Promise.reject(errObject)
      })
    );
  }

  registerCustomer(model:CustomerSaveModel){
    return this.httpClient.post<CustomerSaveModel>('http://localhost:8080/auth/register',model)
    .pipe(
      take(1),
      tap((result:any)=>{
        // console.log('result',result);
      }),
      catchError((err : any) =>{
        console.log('err',err)

        let errObject;

        if(err.status==404){
          errObject={
            message:'İlk Kayıt Başarısız'
          }
        }
        return Promise.reject(errObject)
    }),
    retry(3)
    );
  }
}

