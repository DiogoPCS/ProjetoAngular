import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AdicionarTutorComponent } from '../modals/adicionar-tutor/adicionar-tutor.component';
import { AtualizarTutorComponent } from '../modals/atualizar-tutor/atualizar-tutor.component';
import { DeletarTutorComponent } from '../modals/deletar-tutor/deletar-tutor.component';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.page.html',
  styleUrls: ['./tutor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class TutorPage{

  // Modal
  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  // Abre modal de adicionar tutor
  async modalAdicionarTutor() {
    const modal = await this.modalController.create({
      component: AdicionarTutorComponent,
    });
    await modal.present();
  }

  // Abre modal de atualizar pet passa parâmetro
  async modalAtualizarTutor(data: any) {
    const modal = await this.modalController.create({
      component: AtualizarTutorComponent,
      componentProps: {
        customData: data
      },
    });
    await modal.present();
  }

  // Abre modal de deletar tutor passa parâmetro
  async modalDeletarTutor(data: any) {
    const modal = await this.modalController.create({
      component: DeletarTutorComponent,
      componentProps: {
        customData: data
      },
    });
    await modal.present();
  }

  // Lógica de listagem
  parametro = "";

  verificarArray(items:any): any {
    return Array.isArray(items)
  }
  
  generateRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }
  
  // Função que faz uma busca na API
  buscarAPI(metodo:any, tabela:any, parametro:any) {
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

  // Pesquisa de tutor
  handleInput(event:any) {
    let pesquisa = event.target.value;
    this.parametro = pesquisa;
  }

}
