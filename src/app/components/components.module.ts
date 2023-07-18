import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerSaveComponent} from "./customer-save/customer-save.component";
import {CustomerFindFilterComponent} from "./customer-find-filter/customer-find-filter.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [CustomerSaveComponent, CustomerFindFilterComponent],
  imports: [CommonModule, ReactiveFormsModule, PanelModule, InputNumberModule, ButtonModule],
  exports: [CustomerSaveComponent, CustomerFindFilterComponent]//bunu neden yazdık
})
export class ComponentModule {
}
