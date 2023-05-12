import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,
  CommonModule], 
})
export class HomePage {
  item_selecionado: string = 'desenvolvimento_sistemas';

  selecionarCards(event: any){
    this.item_selecionado = event.detail.value;

  }
}
