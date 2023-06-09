import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule} from 'primeng/menubar';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';


@NgModule({
  declarations: [AdminLayoutComponent, CustomerLayoutComponent],
  imports: [CommonModule,MenubarModule],
  exports:[AdminLayoutComponent,CustomerLayoutComponent]//bunu neden yazdık
})
export class LayoutModule { }
