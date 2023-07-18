import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreditCardSavePageComponent} from "./credit-card-save-page/credit-card-save-page.component";
import {CreditCardSpendPageComponent} from "./credit-card-spend-page/credit-card-spend-page.component";
import {CreditCardRefundPageComponent} from "./credit-card-refund-page/credit-card-refund-page.component";
import {CreditCardPaymentPageComponent} from "./credit-card-payment-page/credit-card-payment-page.component";
import {CreditCardActivityPageComponent} from "./credit-card-activity-page/credit-card-activity-page.component";
import {CreditCardCancelPageComponent} from "./credit-card-cancel-page/credit-card-cancel-page.component";
import {CreditCardEditPageComponent} from "./credit-card-edit-page/credit-card-edit-page.component";
import {CreditCardFindPageComponent} from "./credit-card-find-page/credit-card-find-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

const creditCardRoutes: Routes = [
  {
    path: 'saveCreditCard',
    component: CreditCardSavePageComponent,
  },
  {
    path: 'spendCreditCard',
    component: CreditCardSpendPageComponent,
  },
  {
    path: 'refundCreditCard',
    component: CreditCardRefundPageComponent,
  },
  {
    path: 'paymentCreditCard',
    component: CreditCardPaymentPageComponent,
  },
  {
    path: 'activityCreditCard',
    component: CreditCardActivityPageComponent,
  },
  {
    path: 'cancelCreditCard',
    component: CreditCardCancelPageComponent,
  },
  {
    path: 'editCreditCard',
    component: CreditCardEditPageComponent,
  },
  {
    path: 'findCreditCard',
    component: CreditCardFindPageComponent,
  },
]

@NgModule({
  declarations: [
    CreditCardSavePageComponent,
    CreditCardSpendPageComponent,
    CreditCardRefundPageComponent,
    CreditCardPaymentPageComponent,
    CreditCardActivityPageComponent,
    CreditCardCancelPageComponent,
    CreditCardEditPageComponent,
    CreditCardFindPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(creditCardRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ]
})
export class CreditCardModule {
}
