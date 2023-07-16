import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {CommonModule} from "@angular/common";
import {AccountCancelPageComponent} from "./pages/account/account-cancel-page/account-cancel-page.component";
import {AccountDepositPageComponent} from "./pages/account/account-deposit-page/account-deposit-page.component";
import {AccountEditPageComponent} from "./pages/account/account-edit-page/account-edit-page.component";
import {AccountFindPageComponent} from "./pages/account/account-find-page/account-find-page.component";
import {
  AccountMoneyTransferPageComponent
} from "./pages/account/account-money-transfer-page/account-money-transfer-page.component";
import {AccountSavePageComponent} from "./pages/account/account-save-page/account-save-page.component";
import {AccountWithdrawPageComponent} from "./pages/account/account-withdraw-page/account-withdraw-page.component";
import {
  CreditCardActivityPageComponent
} from "./pages/creditcard/credit-card-activity-page/credit-card-activity-page.component";
import {
  CreditCardCancelPageComponent
} from "./pages/creditcard/credit-card-cancel-page/credit-card-cancel-page.component";
import {CreditCardEditPageComponent} from "./pages/creditcard/credit-card-edit-page/credit-card-edit-page.component";
import {
  CreditCardPaymentPageComponent
} from "./pages/creditcard/credit-card-payment-page/credit-card-payment-page.component";
import {
  CreditCardRefundPageComponent
} from "./pages/creditcard/credit-card-refund-page/credit-card-refund-page.component";
import {CreditCardSavePageComponent} from "./pages/creditcard/credit-card-save-page/credit-card-save-page.component";
import {CreditCardSpendPageComponent} from "./pages/creditcard/credit-card-spend-page/credit-card-spend-page.component";
import {CustomerDeletePageComponent} from "./pages/customer/customer-delete-page/customer-delete-page.component";
import {CustomerFindPageComponent} from "./pages/customer/customer-find-page/customer-find-page.component";
import {CustomerLoginPageComponent} from "./pages/customer/customer-login-page/customer-login-page.component";
import {CustomerRegisterPageComponent} from "./pages/customer/customer-register-page/customer-register-page.component";
import {CustomerSavePageComponent} from "./pages/customer/customer-save-page/customer-save-page.component";
import {NotFoundPageComponent} from "./pages/util/not-found-page/not-found-page.component";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {InputNumberModule} from "primeng/inputnumber";
import {CustomerFindFilterComponent} from "./components/customer-find-filter/customer-find-filter.component";
import {CustomerSaveComponent} from "./components/customer-save/customer-save.component";

@NgModule({
  declarations: [
    AppComponent,
    AccountCancelPageComponent,
    AccountDepositPageComponent,
    AccountEditPageComponent,
    AccountFindPageComponent,
    AccountMoneyTransferPageComponent,
    AccountSavePageComponent,
    AccountWithdrawPageComponent,
    CreditCardActivityPageComponent,
    CreditCardCancelPageComponent,
    CreditCardEditPageComponent,
    CreditCardPaymentPageComponent,
    CreditCardRefundPageComponent,
    CreditCardSavePageComponent,
    CreditCardSpendPageComponent,
    CustomerDeletePageComponent,
    CustomerFindPageComponent,
    CustomerLoginPageComponent,
    CustomerRegisterPageComponent,
    CustomerSavePageComponent,
    NotFoundPageComponent,
    CustomerFindFilterComponent,
    CustomerSaveComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    ButtonModule,
    ReactiveFormsModule,
    PanelModule,
    TableModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
