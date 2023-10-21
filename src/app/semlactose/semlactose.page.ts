import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-semlactose',
  templateUrl: './semlactose.page.html',
  styleUrls: ['./semlactose.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SemlactosePage {

  constructor() { }
  isModalOpenSL = false;
  
  setOpenSL(isOpen: boolean) {
    this.isModalOpenSL = isOpen;
  }
  
}
