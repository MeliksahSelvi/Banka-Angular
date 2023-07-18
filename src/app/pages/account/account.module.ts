import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountSavePageComponent} from "./account-save-page/account-save-page.component";
import {AccountMoneyTransferPageComponent} from "./account-money-transfer-page/account-money-transfer-page.component";
import {AccountWithdrawPageComponent} from "./account-withdraw-page/account-withdraw-page.component";
import {AccountDepositPageComponent} from "./account-deposit-page/account-deposit-page.component";
import {AccountCancelPageComponent} from "./account-cancel-page/account-cancel-page.component";
import {AccountEditPageComponent} from "./account-edit-page/account-edit-page.component";
import {AccountFindPageComponent} from "./account-find-page/account-find-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

const accountRoutes: Routes =[
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
    path: 'editAccount',
    component: AccountEditPageComponent,
  },
  {
    path: 'findAccount',
    component: AccountFindPageComponent,
  },
]

@NgModule({
  declarations: [
    AccountSavePageComponent,
    AccountMoneyTransferPageComponent,
    AccountWithdrawPageComponent,
    AccountDepositPageComponent,
    AccountCancelPageComponent,
    AccountEditPageComponent,
    AccountFindPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ]
})
export class AccountModule { }
