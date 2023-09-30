import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-deletar-pet',
  templateUrl: './deletar-pet.component.html',
  styleUrls: ['./deletar-pet.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule]
})
export class DeletarPetComponent  implements OnInit {
  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  @Input() customData: any;

  deletarPet(parametro:any){
    let foto = this.buscarAPI('listar', 'pet', parametro)[0].foto_perfil;  // Foto perfil do pet
    if(foto){
      this.deletarArquivo(foto);  // Apaga foto de perfil
    }
    this.buscarAPI('deletar', 'pet', parametro);  // Apaga pet
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

  deletarArquivo(caminho:any) {
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost/Aula/API/deletar${caminho}`, false);
    request.send();
  }
}
