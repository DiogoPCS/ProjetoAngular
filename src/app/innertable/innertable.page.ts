import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-innertable',
  templateUrl: './innertable.page.html',
  styleUrls: ['./innertable.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class InnertablePage {
  // Função para abrir ou fechar o modal
  isModalOpenLR = false;
  isModalOpenIR = false;
  isModalOpenAR = false;
  isModalOpenER = false;

  receita = {
    nome: null,
    descricao:null,
    ingredientes:[
      {descricao:null}
    ],
    modo_preparo:[
      {descricao:null}
    ],
    tipo: null,
    espeficacao:null
  }

  ingrediente = {descricao:null};
  modopreparo = {descricao:null};

  
  adcionarIngrediente(){
    this.receita.ingredientes.push(this.ingrediente)
    this.ingrediente={descricao:null};
    console.log(this.receita)
  }

  removerIngredientes(index:any){
    this.receita.ingredientes.splice(index,1)
    // this._crudService.insert(this.receita)
  }


  adcionarModoPreparo(){
    this.receita.modo_preparo.push(this.modopreparo)
    this.modopreparo={descricao:null};
    console.log(this.receita)
  }

  
  removerModoPreparo(index:any){
    this.receita.modo_preparo.splice(index,1)
    // this._crudService.insert(this.receita)
  }


  constructor(private modalController: ModalController, private router: Router, private alertController: AlertController) {
    this.receita.ingredientes.splice(0,1)
    this.receita.modo_preparo.splice(0,1)
  }

  ngOnInit() {
    this.setOpenLR(this.isModalOpenLR);
    // Chame as outras funções conforme necessário para os outros modais
  }


  //ALERT LR

  async exibirAlertaLR() {
    const alert = await this.alertController.create({
      id: 'alertaInserirReceita', // O mesmo ID que você usou no HTML
      header: 'Deseja inserir essa receita?',
      buttons: this.alertBotaoLR
    });

    await alert.present();
  }

  // Defina os botões aqui
  alertBotaoLR = [
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'secondary',
    },
    {
      text: 'OK',
      handler: () => {
        // Coloque o código que você quer executar quando o usuário pressionar OK aqui
      }
    }
  ];

   // Função para fechar o modal e navegar para outra página
   async fecharModalENavegar() {
    await this.modalController.dismiss(); // Fecha o modal
    this.router.navigate(['../semlactose']); // Navega para a página 'semlactose'
  }

 



 setOpenLR(isOpen: boolean) {
    this.isModalOpenLR = isOpen;
  }

  setOpenIR(isOpen: boolean) {
    this.isModalOpenIR = isOpen;
  }

  setOpenAR(isOpen: boolean) {
    this.isModalOpenAR = isOpen;
  }

  setOpenER(isOpen: boolean) {
    this.isModalOpenER = isOpen;
  }


  
}
