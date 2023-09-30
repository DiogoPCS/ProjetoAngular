import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
// import { AdicionarPetComponent } from '../modals/adicionar-pet/adicionar-pet.component';
// import { AtualizarPetComponent } from '../modals/atualizar-pet/atualizar-pet.component';
import { DeletarProcedimentosComponent } from '../modals/deletar-procedimentos/deletar-procedimentos.component';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.page.html',
  styleUrls: ['./procedimentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class ProcedimentosPage{

  // Modal
  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  // Abre modal de deletar procedimentos passa parâmetro
  async modalDeletarProcedimentos(data: any) {
    const modal = await this.modalController.create({
      component: DeletarProcedimentosComponent,
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

  // Pesquisa de tipo de procedimento
  handleInput(event:any) {
    let pesquisa = event.target.value;
    this.parametro = pesquisa;
  }

}
