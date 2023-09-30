import { CommonModule, NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController, NavParams, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-agendamento',
  templateUrl: './adicionar-agendamento.component.html',
  styleUrls: ['./adicionar-agendamento.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule]
})
export class AdicionarAgendamentoComponent  implements OnInit {

  constructor(private modalController: ModalController, private toastController: ToastController) {}
  @Input() customData: any;

  ngOnInit(): void {
    this.gerarValor()    
  }

  // Declaração de variavéis
  tutor: any = "";
  cod_tutor: any = '';
  tutorSelecionado = true;
  cod_pet: any = '';
  servico: any = '1';
  qtd_banho: any = '0';
  observacao: any = '';
  cod_pacote: any = '';
  data_saida: any = '';
  status: any = false;
  cod_agendamento:any = '';
  valor: any = '0.00';
  desconto: any = '0.00';
  valor_total: any = Number(this.valor)+Number(this.desconto);
  forma:any = '';


  // LÓGICA DO FORMULARIO
  procurarTutor () {  // Ao desclicar input tutor, procura um tutor com o nome
    if(this.tutor !== ""){
      let res = this.getAPI('listar', 'tutor', this.tutor)[0];
      if (res){  // Se for achado um tutor, permite cadastro
        this.tutor = res.nome;
        this.tutorSelecionado = false;
        this.cod_tutor = res.cod_tutor;
      } else {
        this.tutorSelecionado = true;
      }
    }
  }

  gerarValor(){
    let diarias = 1
    if (this.data_saida != '') {
      let d1:any = new Date(this.customData)
      let d2:any = new Date(this.data_saida)
      let diff = d2 - d1
      diarias = diff / (24 * 60 * 60 * 1000)
    }
    let valor_diaria = this.getAPI('listar', 'servico', this.servico)[0].valor_diaria;
    this.valor = valor_diaria * diarias
    this.valor_total = this.valor - this.desconto;

  }
  
  // Verifica se é array
  verificarArray (items:any): any {
    return Array.isArray(items)
  }

  // LÓGICA DE ADICIONAR  
  async adicionarAgendamento () {
    if (this.cod_pet === ""){
      this.presentToast("Escolha um pet");
    } else {
      let agendamento = {
        'cod_pet': Number(this.cod_pet),
        'cod_servico': Number(this.servico),
        'cod_pacote': this.cod_pacote == '' ? "NULL" : Number(this.cod_pacote),
        'data': `'${this.customData}'`,
        'data_saida': `'${this.data_saida === '' ? this.customData : this.data_saida}'`,
        'qtd_banho': Number(this.qtd_banho),
        'observacao': `'${this.observacao}'`
      }
      let resposta = await this.postAPI('adicionar', 'agendamento', '', agendamento);
      this.cod_agendamento = resposta.ID;
      if (resposta.ERRO) {
        this.presentToast(resposta.ERRO); //chama toast da verificação
      }
      else {
        let pagamento = {
          'cod_agendamento': Number(this.cod_agendamento),
          'valor': Number(this.valor),
          'desconto': Number(this.desconto),
          'valor_total': Number(this.valor_total),
          'forma': `'${this.forma}'`,
          'status': this.status ? 1 : 0
        }
        console.log(JSON.stringify(pagamento))
        let resposta = await this.postAPI('adicionar', 'pgt_agendamento', '', pagamento);
        if (resposta.ERRO) {
          this.presentToast(resposta.ERRO); //chama toast da verificação
        } else {
          this.modalController.dismiss();
        }
      }
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