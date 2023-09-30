import { CommonModule, NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController, NavParams, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-tutor',
  templateUrl: './adicionar-tutor.component.html',
  styleUrls: ['./adicionar-tutor.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule]
})
export class AdicionarTutorComponent  implements OnInit {

  constructor(private modalController: ModalController, private toastController: ToastController) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  // Declaração de variavéis
  nome: any = "";
  cpf: any = "";
  telefone: any = "";
  data_nasc: any = "";
  endereco: any = "";
  email: any = "";
  senha: any = "";
  
  
  // LÓGICA DE ADICIONAR
  
  async adicionarTutor () {
    let tutor = {
      'nome': `'${this.nome}'`,
      'cpf': `'${this.cpf}'`,
      'telefone': `'${this.telefone}'`,
      'data_nasc': `'${this.data_nasc}'`,
      'endereco': `'${this.endereco}'`,
      'email': `'${this.email}'`,
      'senha': `'${this.senha}'`
    }
    let resposta = await this.postAPI('adicionar', 'tutor', '', tutor);
    if (resposta.ERRO) {
      this.presentToast(resposta.ERRO); //chama toast da verificação
    }
    else {
      this.modalController.dismiss();
    }
  }
  
  // Faz um post na API
  async postAPI (acao:any, tabela:any, parametro:any, dados:any) {
    const options = {
      method: 'POST',
      body: JSON.stringify(dados),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      return fetch(`http://localhost/Aula/API/${acao}/${tabela}/${parametro}`, options)
      .then(res => {
        return res.json();
      })
      .catch(err => {
        return err.json()
      })
  }
  
  // Faz um get na API
  getAPI (metodo:any, tabela:any, parametro:any) {
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost/Aula/API/${metodo}/${tabela}/${parametro}`, false);
    request.send();
    
    if (request.status === 200) {
        return JSON.parse(request.responseText);
      } else {
        console.error('Erro na requisição:', request.status);
        return Array();
    }
  }
  
  // LÓGICA DOS COMPONENTES

  closeModal () {
    this.modalController.dismiss();
  }
  
  async presentToast (mensagem:any) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      position: 'top',
    });
    
    await toast.present();
  }

}
