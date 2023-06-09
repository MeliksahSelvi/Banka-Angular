import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSavePageComponent } from './pages/customer-save-page/customer-save-page.component';
import { CustomerFindPageComponent } from './pages/customer-find-page/customer-find-page.component';
import { CustomerDeletePageComponent } from './pages/customer-delete-page/customer-delete-page.component';
import { CustomerLoginPageComponent } from './pages/customer-login-page/customer-login-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CustomerLayoutComponent } from './layout/customer-layout/customer-layout.component';
import { CustomerRegisterPageComponent } from './pages/customer-register-page/customer-register-page.component';
import { AccountSavePageComponent } from './pages/account-save-page/account-save-page.component';
import { AccountFindPageComponent } from './pages/account-find-page/account-find-page.component';
import { AccountEditPageComponent } from './pages/account-edit-page/account-edit-page.component';
import { CreditCardSavePageComponent } from './pages/credit-card-save-page/credit-card-save-page.component';
import { CreditCardEditPageComponent } from './pages/credit-card-edit-page/credit-card-edit-page.component';
import { CreditCardFindPageComponent } from './pages/credit-card-find-page/credit-card-find-page.component';
import { CreditCardActivityPageComponent } from './pages/credit-card-activity-page/credit-card-activity-page.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerLoginPageComponent,
    data:{
      title:'Müşteri Giriş Ekranı',
    }
  },
  {
    path:'register',
    component:CustomerRegisterPageComponent,
    data:{
      title:'Müşteri İlk Kayıt Ekranı',
    }
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'saveCustomer',
        component:CustomerSavePageComponent,
      },
      {
        path:'findCustomer',
        component:CustomerFindPageComponent,
      },
      {
        path:'deleteCustomer',
        component:CustomerDeletePageComponent,
      },
      {
        path:'saveAccount',
        component:AccountSavePageComponent,
      },
      {
        path:'findAccount',
        component:AccountFindPageComponent,
      },
      {
        path:'editAccount',
        component:AccountEditPageComponent,
      },
      {
        path:'saveCreditCard',
        component:CreditCardSavePageComponent,
      },
      {
        path:'findCreditCard',
        component:CreditCardFindPageComponent,
      },
      {
        path:'editCreditCard',
        component:CreditCardEditPageComponent,
      },
      {
        path:'activityCreditCard',
        component:CreditCardActivityPageComponent,
      },
    ]
  },
  {
    path:'customer',
    component:CustomerLayoutComponent,
    // children:[
    //   {
    //     path:'save',
    //     component:CustomerSavePageComponent,
    //     data:{
    //       title:'Müşteri Kayıt',
    //     }
    //   },
    //   {
    //     path:'findCustomer',
    //     component:CustomerFindPageComponent,
    //     data:{
    //       title:'Müşteri Arama',
    //     }
    //   },
    //   {
    //     path:'deleteCustomer',
    //     component:CustomerDeletePageComponent,
    //     data:{
    //       title:'Müşteri Silme',
    //     }
    //   },
    // ]
  },
  {
    path:'**',
    component:NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
