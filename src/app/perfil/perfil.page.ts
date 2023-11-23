import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  selected: any='curti'
  
    constructor() { }
  
    ngOnInit() {}
   
    handleCurtirClick() {
      this.selected='curti'
  
    }
  
    handleFavoritoClick() {
      this.selected='favos'
    }
  }
 
  
  
  
  
  