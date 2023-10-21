import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterLink, CommonModule],
})
export class HomePage {

  isModalOpen = false;

  receita_selecionada: any;

  receitas=[
    {src:'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'1', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'2', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'3', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'4', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'4', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/1425174/pexels-photo-1425174.jpeg?auto=compress&cs=tinysrgb&w=1600', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
    {src:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  ]
  constructor() {} 

  setOpen(isOpen: boolean, receita: any | null) {
    this.isModalOpen = isOpen;
    this.receita_selecionada = receita;
  }

  onWillDismiss(event: Event) {
    this.isModalOpen = false;
  }

}


