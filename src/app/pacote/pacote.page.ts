import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pacote',
  templateUrl: './pacote.page.html',
  styleUrls: ['./pacote.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PacotePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
