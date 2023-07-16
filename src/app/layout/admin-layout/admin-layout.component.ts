import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit{

  items!: MenuItem[];

  ngOnInit(): void {

    this.items=[
      {
        label:'Müşteri İşlemleri',
        icon:'pi pi-fw pi-customer',
        items:[
          {
            label:'Müşteri Kaydet',
            icon:'pi pi-fw pi-save',
            routerLink:['/saveCustomer'],
          },
          {
            label:'Müşteri Arama',
            icon:'pi pi-fw pi-search',
            routerLink:['/findCustomer'],
          },
          {
            label:'Müşteri Silme',
            icon:'pi pi-fw pi-trash',
            routerLink:['/deleteCustomer'],
          },
        ]
      },
      {
        label:"Hesap İşlemleri",
        icon:'pi pi-fw pi-account',
        items:[
          {
            label:'Hesap Kaydet',
            icon:'pi pi-fw pi-save',
            routerLink:['/saveAccount'],
          },
          {
            label:'Hesap Arama',
            icon:'pi pi-fw pi-search',
            routerLink:['/findAccount'],
          },
          {
            label:'Hesap Düzenle',
            icon:'pi pi-fw pi-trash',
            routerLink:['/editAccount'],
          },
        ]
      },
      {
        label:"Kredi Kartı İşlemleri",
        icon:'pi pi-fw pi-card',
        items:[
          {
            label:'Kredi Kartı Kaydet',
            icon:'pi pi-fw pi-save',
            routerLink:['/saveCreditCard'],
          },
          {
            label:'Kredi Kartı Arama',
            icon:'pi pi-fw pi-search',
            routerLink:['/findCreditCard'],
          },
          {
            label:'Kredi Kartı Düzenle',
            icon:'pi pi-fw pi-trash',
            routerLink:['/editCreditCard'],
          },
          {
            label:'Kredi Kartı Aktiviteleri',
            icon:'pi pi-fw pi-trash',
            routerLink:['/activityCreditCard'],
          },
        ]
      }

    ]
  }

}
