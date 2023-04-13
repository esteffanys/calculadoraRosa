import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
expresao:string;
resultado: number;
  constructor() {
     this.expresao = '';
     this.resultado = 0;
   }
    limpar(){}
    calcular(){}


}
