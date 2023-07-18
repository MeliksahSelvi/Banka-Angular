import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {CustomerLayoutComponent} from './customer-layout/customer-layout.component';
import {MegaMenuModule} from "primeng/megamenu";
import {RouterModule, Routes} from "@angular/router";

const layoutRoutes: Routes = [
  {
    path: 'customer',
    component: CustomerLayoutComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  },
]

@NgModule({
  declarations: [AdminLayoutComponent, CustomerLayoutComponent],
  imports: [
    CommonModule,
    MenubarModule,
    MegaMenuModule,
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [AdminLayoutComponent, CustomerLayoutComponent]//bunu neden yazdık
})
export class LayoutModule {
}
