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
      {
        label:'Hesap İşlemleri',
        icon:'pi pi-fw pi-account',
        items:[
          {
            label:'Hesap Aç',
            icon:'pi pi-fw pi-save',
            routerLink:['/saveAccount'],
          },
          {
            label:'Para Transferi',
            icon:'pi pi-fw pi-transfer',
            routerLink:['/moneyTransfer'],
          },
          {
            label:'Para Çekme',
            icon:'pi pi-fw pi-money',
            routerLink:['/withdraw'],
          },
          {
            label:'Para Yatırma',
            icon:'pi pi-fw pi-money',
            routerLink:['/deposit'],
          },
          {
            label:'Hesabımı Sil',
            icon:'pi pi-fw pi-cancel',
            routerLink:['/cancelAccount'],
          },
        ]
      },
      {
        label:'Kredi Kartı İşlemleri',
        icon:'pi pi-fw pi-card',
        items:[
          {
            label:'Kredi Kartı Aç',
            icon:'pi pi-fw pi-save',
            routerLink:['/saveCreditCard'],
          },
          {
            label:'Kredi Kartı Harcama Yap',
            icon:'pi pi-fw pi-spend',
            routerLink:['/spendCreditCard'],
          },
          {
            label:'Kredi Kartı İşlem İptal',
            icon:'pi pi-fw pi-refund',
            routerLink:['/refundCreditCard'],
          },
          {
            label:'Kredi Kartı Borç Öde',
            icon:'pi pi-fw pi-payment',
            routerLink:['/paymentCreditCard'],
          },
          {
            label:'Kredi Kartı Aktiviteleri',
            icon:'pi pi-fw pi-activity',
            routerLink:['/activityCreditCard'],
          },
          {
            label:'Kredi Kartımı Sil',
            icon:'pi pi-fw pi-cancel',
            routerLink:['/cancelCreditCard'],
          },
        ]
      },
      {
        label:'Güvenli Çıkış',
        icon:'pi pi-fw pi-sign-out',
        command(event){
          const result=confirm('Siteden çıkmak istediğinize emin misiniz?')
          if(result){
            localStorage.clear();
            window.location.href='/'
          }
        }
      },
    ]
  }

}
