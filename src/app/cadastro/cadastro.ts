import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.html',
  styleUrls: ['cadastro.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink],
})
export class CadastroPage {
  constructor() {}
}
