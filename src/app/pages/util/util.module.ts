import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {ButtonModule} from "primeng/button";

const customerRoutes: Routes = [
  {
    path: '**',
    component: NotFoundPageComponent,
  },
]

@NgModule({
  declarations: [
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    ButtonModule,
  ]
})
export class UtilModule {
}
