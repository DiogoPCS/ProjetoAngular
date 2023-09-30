import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { AdicionarAgendamentoComponent } from '../modals/adicionar-agendamento/adicionar-agendamento.component';


@Component({
  selector: 'app-agenda',
  templateUrl: 'agenda.page.html',
  styleUrls: ['agenda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class AgendaPage {
  
constructor(private modalController: ModalController) {}
ngOnInit(): void {
  this.agendamentosMes = this.buscarAPI('listar', 'agendamento', this.gerarData(this.ano, this.mes)); // Busca agendamentos na API
}

// LÓGICA DO MODAL
// Abre modal de adicionar pet
async modalAdicionarAgendamento(data: any) {
  const modal = await this.modalController.create({
    component: AdicionarAgendamentoComponent,
    componentProps: {
      customData: data
    },
  });
  await modal.present();
  // Quando modal é fechado, pega novamente os agendamentos
  modal.onDidDismiss().then(() => {
    this.agendamentosMes = this.buscarAPI('listar', 'agendamento', this.gerarData(this.ano, this.mes))
  });
}

meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

hoje = new Date();                          // Dia atual
amanha = this.adicionarUmDia(this.hoje);    // Dia seguinte
mes = this.hoje.getMonth();                 // Mês atual
ano = this.hoje.getFullYear();              // Ano atual
diaAtual = this.hoje.getDate();             // Dia atual fixo
mesAtual = this.mes;                        // Mes aatual fixo

primeiroDia = new Date(this.ano, this.mes, 1);     // Primeiro dia do mês atual
ultimoDia = new Date(this.ano, this.mes + 1, 0);   // Ultimo dia do mês atual
anteriorDia = new Date(this.ano, this.mes, 0);     // Ultimo dia do mês anterior

ultDia = this.ultimoDia.getDate();            // Número do ultimo dia do mês atual
antDia = this.anteriorDia.getDate();          // Número do ultimo dia do mês anterior

quantAntDias = this.primeiroDia.getUTCDay();            // Quantidade de dias que aparecera do mês anterior
priMesAnt = this.antDia - this.quantAntDias + 1;        // Primeiro dia que aparecera do mês anterior
proxDias = 6 - this.ultimoDia.getDay();                 // Quantidade de dias que aparecera do mês seguinte  

fimDeSemana: number[] = this.gerarFimDeSemana();        // Array com os dias que são sábado ou domingo

agendamentosMes: any;
data = this.gerarData(this.ano, this.mes);

pets: any = [];

filtrarData (dia:any, agendamentos:any) {
  let day = dia < 10 ? `0${dia}` : dia;
  return agendamentos.filter((item:any) => item.data === `${this.data}-${day}`);
}

buscarNomePet (id:any) {
  let nomePet = this.buscarAPI('listar', 'pet', id)[0].nome;
  this.pets[id] = nomePet;
}

// Gera os dias que são sábado ou domingo
gerarFimDeSemana () {
  let fimSemana: number[] = [];
  let aux = 7 - this.quantAntDias;
  while (aux <= this.ultDia) {
    fimSemana.push(aux);
    fimSemana.push(aux+1);
    aux += 7;
  }
  return fimSemana;
}


mesAnterior () {
  if (this.mes == 0){  // Se é janeiro
    this.mes = 11;
    this.ano = this.ano-1;
  } else{
    this.mes = this.mes-1;
  }

  // Reseta configurações
  this.primeiroDia = new Date(this.ano, this.mes, 1);     // Primeiro dia do mês atual
  this.ultimoDia = new Date(this.ano, this.mes + 1, 0);   // Ultimo dia do mês atual
  this.anteriorDia = new Date(this.ano, this.mes, 0);     // Ultimo dia do mês anterior
  
  this.ultDia = this.ultimoDia.getDate();            // Número do ultimo dia do mês
  this.antDia = this.anteriorDia.getDate();          // Número do ultimo dia do mês anterior
  
  this.quantAntDias = this.primeiroDia.getUTCDay();             // Quantidade de dias que aparecera do mês anterior
  this.priMesAnt = this.antDia - this.quantAntDias + 1;         // Primeiro dia que aparecera do mês anterior
  this.proxDias = 6 - this.ultimoDia.getDay();                  // Quantidade de dias que aparecera do mês seguinte 
  this.fimDeSemana = this.gerarFimDeSemana();                   // Array com os dias que são sábado ou domingo
  this.agendamentosMes = this.buscarAPI('listar', 'agendamento', this.gerarData(this.ano, this.mes));
}

proximoMes () {
  if (this.mes == 11){  // Se é dezembro
    this.mes = 0;
    this.ano = this.ano+1;
  } else{
    this.mes = this.mes+1;
  }

  // Reseta configurações
  this.primeiroDia = new Date(this.ano, this.mes, 1);     // Primeiro dia do mês atual
  this.ultimoDia = new Date(this.ano, this.mes + 1, 0);   // Ultimo dia do mês atual
  this.anteriorDia = new Date(this.ano, this.mes, 0);     // Ultimo dia do mês anterior
  
  this.ultDia = this.ultimoDia.getDate();            // Número do ultimo dia do mês
  this.antDia = this.anteriorDia.getDate();          // Número do ultimo dia do mês anterior
  
  this.quantAntDias = this.primeiroDia.getUTCDay();            // Quantidade de dias que aparecera do mês anterior
  this.priMesAnt = this.antDia - this.quantAntDias + 1;        // Primeiro dia que aparecera do mês anterior
  this.proxDias = 6 - this.ultimoDia.getDay();                 // Quantidade de dias que aparecera do mês seguinte  
  this.fimDeSemana = this.gerarFimDeSemana();                  // Array com os dias são sábado ou domingo
  this.agendamentosMes = this.buscarAPI('listar', 'agendamento', this.gerarData(this.ano, this.mes))
}

adicionarUmDia (data: Date) : Date {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() + 1);
  return novaData;
}

verificarArray (items:any): any {
  return Array.isArray(items);
}

generateRange (start: number, end: number): number[] {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

gerarData (ano:any, mes:any) {
  const dataDia = `${ano}-${mes+1 < 10 ? `0${mes+1}` : mes+1}`;
  this.data = dataDia;
  return dataDia;
}

gerarDataDia (ano:any, mes:any, dia:any) {
  const dataDia = `${ano}-${mes+1 < 10 ? `0${mes+1}` : mes+1}-${dia < 10 ? '0' + dia : dia}`;
  return dataDia;
}

gerarDataPostIt (data:any) {
  let mes = data.getMonth()+1;
  let dia = data.getDate();
  let dataFormatada = dia < 10 ? `0${dia}` : dia;
  dataFormatada += '/';
  dataFormatada += mes < 10 ? `0${mes}` : mes;
  return dataFormatada;
}

gerarDataPostItAPI (data:any) {
  let mes = data.getMonth()+1;
  let dia = data.getDate();
  let ano = data.getFullYear();
  let dataFormatada = ano + '-';
  dataFormatada += mes < 10 ? `0${mes}` : mes;
  dataFormatada += '-';
  dataFormatada += dia < 10 ? `0${dia}` : dia;
  return dataFormatada;
}

// Gera escrita do agendamento
gerarAgendamento (agendamento: any) {
  let sevico = this.buscarAPI('listar', 'servico', agendamento.cod_servico)[0].nome;  // Pega o nome do serviço do agendamento
  let pet = this.buscarAPI('listar', 'pet', agendamento.cod_pet)[0].nome;             // Pega o nome do pet do agendamento
  return `${sevico} - ${pet}`;
}

// Função que faz uma busca na API
buscarAPI (metodo:any, tabela:any, parametro:any) {
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
