import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CustomerSavePageComponent} from "./customer-save-page/customer-save-page.component";
import {CustomerFindPageComponent} from "./customer-find-page/customer-find-page.component";
import {CustomerDeletePageComponent} from "./customer-delete-page/customer-delete-page.component";
import {CustomerLoginPageComponent} from "./customer-login-page/customer-login-page.component";
import {CustomerRegisterPageComponent} from "./customer-register-page/customer-register-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {InputNumberModule} from "primeng/inputnumber";
import {ComponentModule} from "../../components/components.module";
import {TableModule} from "primeng/table";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";

const customerRoutes: Routes =[
  {
    path: '',
    component: CustomerLoginPageComponent,
  },
  {
    path: 'register',
    component: CustomerRegisterPageComponent,
  },
  {
    path: 'saveCustomer',
    component: CustomerSavePageComponent,
  },
  {
    path: 'findCustomer',
    component: CustomerFindPageComponent,
  },
  {
    path: 'deleteCustomer',
    component: CustomerDeletePageComponent,
  },
]

@NgModule({
  declarations: [
    CustomerLoginPageComponent,
    CustomerRegisterPageComponent,
    CustomerSavePageComponent,
    CustomerFindPageComponent,
    CustomerDeletePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    PasswordModule,
    ComponentModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
  ]
})
export class CustomerModule { }
