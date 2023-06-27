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
  constructor() {}

  numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  operatorButtons = ['/', '*', '-', '+'];

  exibir(numero: any) {
    alert(numero);
  }
  calcular(resultado: any) {
    alert(resultado);
  }
}

