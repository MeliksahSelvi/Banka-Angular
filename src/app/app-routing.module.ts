import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerLoginPageComponent} from "./pages/customer/customer-login-page/customer-login-page.component";
import {CustomerRegisterPageComponent} from "./pages/customer/customer-register-page/customer-register-page.component";
import {CustomerSavePageComponent} from "./pages/customer/customer-save-page/customer-save-page.component";
import {CustomerFindPageComponent} from "./pages/customer/customer-find-page/customer-find-page.component";
import {CustomerDeletePageComponent} from "./pages/customer/customer-delete-page/customer-delete-page.component";
import {AccountSavePageComponent} from "./pages/account/account-save-page/account-save-page.component";
import {
  AccountMoneyTransferPageComponent
} from "./pages/account/account-money-transfer-page/account-money-transfer-page.component";
import {AccountWithdrawPageComponent} from "./pages/account/account-withdraw-page/account-withdraw-page.component";
import {AccountDepositPageComponent} from "./pages/account/account-deposit-page/account-deposit-page.component";
import {AccountCancelPageComponent} from "./pages/account/account-cancel-page/account-cancel-page.component";
import {AccountEditPageComponent} from "./pages/account/account-edit-page/account-edit-page.component";
import {AccountFindPageComponent} from "./pages/account/account-find-page/account-find-page.component";
import {CreditCardSavePageComponent} from "./pages/creditcard/credit-card-save-page/credit-card-save-page.component";
import {CreditCardSpendPageComponent} from "./pages/creditcard/credit-card-spend-page/credit-card-spend-page.component";
import {
  CreditCardRefundPageComponent
} from "./pages/creditcard/credit-card-refund-page/credit-card-refund-page.component";
import {
  CreditCardPaymentPageComponent
} from "./pages/creditcard/credit-card-payment-page/credit-card-payment-page.component";
import {
  CreditCardActivityPageComponent
} from "./pages/creditcard/credit-card-activity-page/credit-card-activity-page.component";
import {
  CreditCardCancelPageComponent
} from "./pages/creditcard/credit-card-cancel-page/credit-card-cancel-page.component";
import {CreditCardEditPageComponent} from "./pages/creditcard/credit-card-edit-page/credit-card-edit-page.component";
import {CreditCardFindPageComponent} from "./pages/creditcard/credit-card-find-page/credit-card-find-page.component";
import {CustomerLayoutComponent} from "./layout/customer-layout/customer-layout.component";
import {AdminLayoutComponent} from "./layout/admin-layout/admin-layout.component";
import {NotFoundPageComponent} from "./pages/util/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerLoginPageComponent,
  },
  {
    path: 'register',
    component: CustomerRegisterPageComponent,
  },
  {
    path: 'customer',
    component: CustomerLayoutComponent,
    children:[
      {
        path: 'saveAccount',
        component: AccountSavePageComponent,
      },
      {
        path: 'moneyTransfer',
        component: AccountMoneyTransferPageComponent,
      },
      {
        path: 'withdraw',
        component: AccountWithdrawPageComponent,
      },
      {
        path: 'deposit',
        component: AccountDepositPageComponent,
      },
      {
        path: 'cancelAccount',
        component: AccountCancelPageComponent,
      },
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
    ],
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
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
      {
        path: 'saveAccount',
        component: AccountSavePageComponent,
      },
      {
        path: 'editAccount',
        component: AccountEditPageComponent,
      },
      {
        path: 'findAccount',
        component: AccountFindPageComponent,
      },
      {
        path: 'saveCreditCard',
        component: CreditCardSavePageComponent,
      },
      {
        path: 'editCreditCard',
        component: CreditCardEditPageComponent,
      },
      {
        path: 'findCreditCard',
        component: CreditCardFindPageComponent,
      },
      {
        path: 'activityCreditCard',
        component: CreditCardActivityPageComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
