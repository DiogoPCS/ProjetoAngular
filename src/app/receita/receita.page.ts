import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReceitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
