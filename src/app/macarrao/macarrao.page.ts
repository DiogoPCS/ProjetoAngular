import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-macarrao',
  templateUrl: './macarrao.page.html',
  styleUrls: ['./macarrao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class MacarraoPage {

  urlTikTok = 'https://www.tiktok.com/@polivalentereceitas?_t=8gOzc6KQopq&_r=1';
  urlInstagram = 'https://instagram.com/polivalentereceitas?igshid=MzRlODBiNWFlZA== ';
  urlYoutube = 'https://www.youtube.com/@thiaguinhocomth';
  abrirTikTok() {
    window.open(this.urlTikTok, '_blank');
  }
  
  abrirInstagram() {
    window.open(this.urlInstagram, '_blank');
  }
  
  abrirYoutube() {
    window.open(this.urlYoutube, '_blank');
  }
  

  constructor() { }

  ngOnInit() {
  }

}