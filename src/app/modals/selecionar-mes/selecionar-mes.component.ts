import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonDatetime, IonicModule, ModalController, NavParams } from '@ionic/angular';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-selecionar-mes',
  templateUrl: './selecionar-mes.component.html',
  styleUrls: ['./selecionar-mes.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})

export class SelecionarMesComponent  implements OnInit {

  @ViewChild('myDatetime')
  myDatetime!: IonDatetime;
  mes:any = "";

  // Função para acessar o valor do ion-datetime
  obterValorDoDatetime() {
    this.mes = this.myDatetime.value; // Obter o valor do ion-datetime
    this.enviarParaOutraPagina()
  }
  
  constructor(private modalController: ModalController, private sharedDataService: SharedDataService ) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal() {
    this.modalController.dismiss();
    this.obterValorDoDatetime();
  }

  enviarParaOutraPagina() {
    this.sharedDataService.mes = this.mes;
  }
}


