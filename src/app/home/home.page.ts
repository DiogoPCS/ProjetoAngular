import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

	resultado: any = 0;

	exibir(numero: any) {
		// usamos this para acessar a variável que foi criada acima
		this.resultado += numero;
	}

  clear(){
    this.resultado = '';

  }

  apagaUltimo(){
    let chars = this.resultado.slice(0, -1);
    this.resultado = chars;
  }

  somar(){
    
  }

}
