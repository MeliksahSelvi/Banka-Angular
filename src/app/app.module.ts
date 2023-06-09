import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSavePageComponent } from './pages/customer-save-page/customer-save-page.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { CustomerFindPageComponent } from './pages/customer-find-page/customer-find-page.component';
import { CustomerFindFilterComponent } from './components/customer-find-filter/customer-find-filter.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CustomerDeletePageComponent } from './pages/customer-delete-page/customer-delete-page.component';
import { CustomerLoginPageComponent } from './pages/customer-login-page/customer-login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CustomerSaveComponent } from './components/customer-save/customer-save.component';
import { CustomerRegisterPageComponent } from './pages/customer-register-page/customer-register-page.component';
import { AccountSavePageComponent } from './pages/account-save-page/account-save-page.component';
import { AccountFindPageComponent } from './pages/account-find-page/account-find-page.component';
import { AccountEditPageComponent } from './pages/account-edit-page/account-edit-page.component';
import { CreditCardSavePageComponent } from './pages/credit-card-save-page/credit-card-save-page.component';
import { CreditCardFindPageComponent } from './pages/credit-card-find-page/credit-card-find-page.component';
import { CreditCardEditPageComponent } from './pages/credit-card-edit-page/credit-card-edit-page.component';
import { CreditCardActivityPageComponent } from './pages/credit-card-activity-page/credit-card-activity-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSavePageComponent,
    CustomerFindPageComponent,
    CustomerFindFilterComponent,
    CustomerDeletePageComponent,
    CustomerLoginPageComponent,
    NotFoundPageComponent,
    CustomerSaveComponent,
    CustomerRegisterPageComponent,
    AccountSavePageComponent,
    AccountFindPageComponent,
    AccountEditPageComponent,
    CreditCardSavePageComponent,
    CreditCardFindPageComponent,
    CreditCardEditPageComponent,
    CreditCardActivityPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
