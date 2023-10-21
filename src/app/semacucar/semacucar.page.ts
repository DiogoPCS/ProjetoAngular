import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-semacucar',
  templateUrl: './semacucar.page.html',
  styleUrls: ['./semacucar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SemacucarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
