import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lowcarb',
  templateUrl: './lowcarb.page.html',
  styleUrls: ['./lowcarb.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LowcarbPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
