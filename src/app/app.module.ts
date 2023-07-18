import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {UtilModule} from "./pages/util/util.module";
import {CreditCardModule} from "./pages/creditcard/credit-card.module";
import {AccountModule} from "./pages/account/account.module";
import {ComponentModule} from "./components/components.module";
import {CustomerModule} from "./pages/customer/customer.module";
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    CustomerModule,
    CreditCardModule,
    AccountModule,
    UtilModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
