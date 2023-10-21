import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink],
})
export class LoginPage {
  constructor() {}
}
