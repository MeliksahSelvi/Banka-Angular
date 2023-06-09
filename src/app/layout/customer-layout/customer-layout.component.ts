import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit{
  
  items!: MenuItem[];

  ngOnInit(): void {

    this.items=[
      // {
      //   label:'Müşteri Kaydet',
      //   icon:'pi pi-fw pi-save',
      //   routerLink:['/save'],
      // },
      // {
      //   label:'Müşteri Arama',
      //   icon:'pi pi-fw pi-search',
      //   routerLink:['/findCustomer'],
      // },
      // {
      //   label:'Müşteri Silme',
      //   icon:'pi pi-fw pi-trash',
      //   routerLink:['/deleteCustomer'],
      // },
      {
        label:'Güvenli Çıkış',
        icon:'pi pi-fw pi-sign-out',
        command(event){
          const result=confirm('Siteden çıkmak istediğinize emin misiniz?')
          if(result){
            localStorage.clear();
            window.location.reload();
          }
        }
      },
    ]
  }

}
