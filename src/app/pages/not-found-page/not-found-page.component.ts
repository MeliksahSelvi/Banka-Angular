import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {

  constructor(private routerService:Router){
    
  }

  click(){
    const result=confirm('Anasayfaya Yönlendirilmek istediğinize emin misiniz?');

    if(result){
      this.routerService.navigate(['/']);
    }
 
  }
}
