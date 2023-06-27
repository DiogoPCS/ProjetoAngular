import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  // tipo => para ver se vai ser uma ação ou um valor
  // valor => recebe o valor da ação ou valor
  calcular(tipo: string, valor: any) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            // limpa o input
            (document.getElementById('resultado') as HTMLInputElement).value = '';
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === ',' || valor === '%') {
            (document.getElementById('resultado') as HTMLInputElement).value += valor;
        }

        if (valor === '=') {
            let expressao = (document.getElementById('resultado') as HTMLInputElement).value;
            
            // verifica se a expressão contém %
            if (expressao.includes('%')) {
                // separa o valor e a porcentagem da expressão
                const [valorStr, porcentagemStr] = expressao.split('%');
                
                // converte os valores para números
                const valorNum = parseFloat(valorStr.replace(',', '.'));
                const porcentagemNum = parseFloat(porcentagemStr.replace(',', '.'));
                
                // calcular a porcentagem
                const resultado = valorNum * (porcentagemNum / 100);
                
                // exibe o resultado com vírgula
                (document.getElementById('resultado') as HTMLInputElement).value = resultado.toString().replace('.', ',');
            } else {
                const valorCampo = eval(expressao.replace(',', '.'));
                (document.getElementById('resultado') as HTMLInputElement).value = valorCampo.toString().replace('.', ',');
            }
        }
    }
    else if (tipo === 'valor') {
        // adiciona o valor no input
        (document.getElementById('resultado') as HTMLInputElement).value += valor;
    }
  }
}
