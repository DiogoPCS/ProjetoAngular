import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {
  result: string = '';
  

  acmAdd(item: string){
    this.result += item 
  }

  clearR(){
    this.result = ''
  }
  backspace(){
    this.result = this.result.slice(0, -1)
  }
  showResult(){
    this.result = eval(this.result)
  }
}
