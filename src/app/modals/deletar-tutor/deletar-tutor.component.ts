import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletar-tutor',
  templateUrl: './deletar-tutor.component.html',
  styleUrls: ['./deletar-tutor.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule]
})
export class DeletarTutorComponent  implements OnInit {

  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  @Input() customData: any;

  deletarTutor(parametro:any){
    this.buscarAPI('deletar', 'tutor', parametro);  // Apaga tutor
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
