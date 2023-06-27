import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage {

  // variável criada para receber todos os valores dos cliques dos botões do html e armazenar como string
  // this é usado sempre que preciso pegar a variável de fora da função e usar dentro delas
  exibirValor = '';

  // função criada para armazenar cada valor do clique dos botões
  clickBotao(botao: string) {
    if (botao === '%') {
      this.calcularPercentual();
    } else {
      this.exibirValor += botao;
    }
  }

  // função criada para excluir todos os valores selecionados por clique anteriormente
  Limpar() {
    this.exibirValor = '';
  }

  // função criada para calcular a expressão matemática do usuário
  // try/catch é usado para verificar erros durante a verificação da expressão matemática criada pelo usuário, sendo try a parte executada se não tiver erro e o catch consegue captar o erro e retorna uma mensagem de erro
  // função nativa eval() é usada para avaliar se o meu texto é um código válido em JS para ser executado, aqui o exibirValor passa a ser number
  // variável resultado é usada para receber o valor da função nativa eval()
  // toString() foi usado para converter o resultado do cálculo da expressão em uma string
  Calcular() {
    try {
      const resultado = eval(this.exibirValor);
      this.exibirValor = resultado.toString();
    } catch (_) {
      this.exibirValor = 'Algo Deu Errado!';
    }
  }

  // função criada expecificamente para um cálculo, de percentual
  // também usando o try/catch, ela tem uma variável percentual que igual a variável resultado, recebe o valor final da expressão
  // a variável porcentagem recebe o resultado do cálculo da expressão matemática
  // neste cálculo de percentual o eval transforma o texto dos botões em number e faz o cálculo
  // por fim é acrescentado ao resultado o sinal de multiplicação
  calcularPercentual() {
    try {
      const porcentagem = eval(this.exibirValor) / 100;
      this.exibirValor = porcentagem.toString();
      this.exibirValor = this.exibirValor + '*';
    } catch (error) {
      this.exibirValor = 'Algo Deu Errado!';
    }

  }

  // função criada para apagar somente o último valor digitado pelo usuário
  // função nativa slice() é usada para extrair uma parte de uma string, especificando o índice inicial o final
  apagarUltimoNumero() {
    this.exibirValor = this.exibirValor.slice(0, -1);
  }

}