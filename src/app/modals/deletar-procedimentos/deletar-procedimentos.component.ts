import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletar-procedimentos',
  templateUrl: './deletar-procedimentos.component.html',
  styleUrls: ['./deletar-procedimentos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule]
})
export class DeletarProcedimentosComponent  implements OnInit {

  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  @Input() customData: any;

  deletarProcedimentos(parametro:any){
    this.buscarAPI('deletar', 'tipoprocedimento', parametro);  // Apaga procedimentos
    this.modalController.dismiss();
  }

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

}
