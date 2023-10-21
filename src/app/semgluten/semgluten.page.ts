import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-semgluten',
  templateUrl: './semgluten.page.html',
  styleUrls: ['./semgluten.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SemglutenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
