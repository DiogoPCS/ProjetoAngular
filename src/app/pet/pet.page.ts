import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AdicionarPetComponent } from '../modals/adicionar-pet/adicionar-pet.component';
import { AtualizarPetComponent } from '../modals/atualizar-pet/atualizar-pet.component';
import { DeletarPetComponent } from '../modals/deletar-pet/deletar-pet.component';


@Component({
  selector: 'app-pet',
  templateUrl: 'pet.page.html',
  styleUrls: ['pet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
  
})
export class PetPage {

  // Modal
  constructor(private modalController: ModalController) {}

  // Abre modal de adicionar pet
  async modalAdicionarPet() {
    const modal = await this.modalController.create({
      component: AdicionarPetComponent,
    });
    await modal.present();
  }

  // Abre modal de atualizar pet passa parâmetro
  async modalAtualizarPet(data: any) {
    const modal = await this.modalController.create({
      component: AtualizarPetComponent,
      componentProps: {
        customData: data
      },
    });
    await modal.present();
  }

  // Abre modal de atualizar pet passa parâmetro
  async modalDeletarPet(data: any) {
    const modal = await this.modalController.create({
      component: DeletarPetComponent,
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

  // Pesquisa de pet
  handleInput(event:any) {
    let pesquisa = event.target.value;
    this.parametro = pesquisa;
  }
}