import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-atualizar-pet',
  templateUrl: './atualizar-pet.component.html',
  styleUrls: ['./atualizar-pet.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, FormsModule]
})

export class AtualizarPetComponent  implements OnInit {
  @Input() customData: any;

  nome: any;
  tutor: any;
  especie: any;
  raca: any;
  porte: any;
  sociabilidade: any;
  observacoes: any;
  foto: any = "";          // Arquivo em si
  arquivo: any = "";       // Nome do arquivo que irá aparecer no input
  caminho: any = "";       // Caminho do arquivo na API
  caminhoAntigo: any = "";       // Caminho do arquivo antigo na API

  // Ao selecionar o arquivo, vai aparecer o nome no input
  onFileSelected(event: any) {
    this.foto = event.target.files[0];
    if (this.foto) {
      this.arquivo = this.foto.name;
      this.foto = this.foto; // Atribui o arquivo à variável 'foto'
    }
  }

  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
    this.nome = this.customData.nome;
    this.tutor = this.getAPI('listar', 'tutor', this.customData.cod_tutor)[0].nome;
    this.especie = this.customData.especie;
    this.raca = this.customData.raca;
    this.porte = this.customData.porte;
    this.sociabilidade = this.customData.sociabilidade;
    this.observacoes = this.customData.observacoes;
    this.caminhoAntigo = this.customData.foto_perfil;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async atualizarPet(codigo:any){
    if (this.foto) {
      await this.adicionarArquivo()  // Espera o aquivo ser adicionado
    }
    let pet = {
      'nome': `'${this.nome}'`,
      'cod_tutor': Number(this.getAPI('listar', 'tutor', this.tutor)[0].cod_tutor),
      'especie': `'${this.especie}'`,
      'raca': `'${this.raca}'`,
      'porte': `'${this.porte}'`,
      'sociabilidade': Number(this.sociabilidade),
      'observacoes': `'${this.observacoes}'`,
      'foto_perfil': `'${this.caminho}'`
    }
    this.postAPI('atualizar', 'pet', codigo, pet);
    this.modalController.dismiss();
  }

  // Faz um post na API
  postAPI(acao:any, tabela:any, parametro:any, dados:any) {
    const options = {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(`http://localhost/Aula/API/${acao}/${tabela}/${parametro}`, options)
        .then(res => res.json())
        .then(res => console.log(JSON.stringify(res)))
        .catch(err => console.error(err))
  }

  // Faz um get na API
  getAPI(metodo:any, tabela:any, parametro:any) {
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

  // Verifica se é array
  verificarArray(items:any): any {
    return Array.isArray(items)
  }

  // Chama aa função de adicionar na API e pega o caminho retornado
  async adicionarArquivo() {
    let extensao = this.foto.name.split(".");
    extensao = extensao[extensao.length-1];
    let nomeFoto = `${this.nome}-${Date.now()}.${extensao}`;
    this.foto = new File([this.foto], nomeFoto, { type: this.foto.type });  // Formata nome da foto
    this.caminho = await this.adicionarArquivoAPI();
    this.caminho = this.caminho.slice(4);        // Caminho da foto salva
    let foto = this.caminhoAntigo.substring(9);  // Foto perfil do pet antigo
    if(foto){   // Se já existir uma foto, apaga a antiga
      this.getAPI('deletarArquivos', foto, '');    // Apaga foto de perfil
    }
  }

  // Adiciona a foto na API
  async adicionarArquivoAPI() {
    const formData = new FormData();
    formData.append('file', this.foto);
    const options = {
        method: 'POST',
        body: formData
    };
    try {
        const res = await fetch(`http://localhost/Aula/API/adicionarArquivo`, options);
        const data = await res.json();
        return data.caminho;
    } catch (err) {
        console.error(err);
        throw err;
    }
  }
}
