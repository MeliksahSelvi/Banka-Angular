import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, take, tap } from 'rxjs';


export interface CustomerSaveModel{
  name:string,
  surName:string,
  identityNo:number,
  password:string,
}

export interface CustomerFindModel{
  id:number,
  name:string,
  surName:string,
  identityNo:number,
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService{

  constructor(private httpClient:HttpClient) { }


  saveCustomer(model:CustomerSaveModel){
    return this.httpClient.post<CustomerSaveModel>('http://localhost:8080/api/v1/customers',model)
    .pipe(
      take(1),
      tap((result:any)=>{
        // console.log('result',result);
      }),
      catchError((err : any) =>{
        console.log('err',err)

        let errObject;

        if(err.status==400){
          errObject={
            message:'Kayıt Başarısız'
          }
        }
        
        return Promise.reject(errObject)
    }),
    retry(3)
    );
  }

  findCustomerById(id:number):Observable<CustomerFindModel[]>{
    return this.httpClient
    .get<CustomerFindModel[]>(`http://localhost:8080/api/v1/customers/${id}`)
    .pipe(take(1),retry(3))
  }

  findAllCustomer():Observable<CustomerFindModel[]>{
    return this.httpClient
    .get<CustomerFindModel[]>('http://localhost:8080/api/v1/customers')
    .pipe(take(1),retry(3))
  }

  deleteCustomer(id:number){
    return this.httpClient
    .delete(`http://localhost:8080/api/v1/customers/${id}`)
    .pipe(take(1),retry(3))
  }
}
