import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HomePage {
  perfil = {
    nome: 'Carlitos', 
    profissao: 'Professor', 
    mencao: '@carlitos', 
    biografia: 'Professor e gestor de projeots', 
    cidade: 'Tatuí', 
    estado: 'São Paulo', 
    idioma: 'Português',
    conta_criada_em: 'Janeiro 2020',
    foto_perfil: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  };

  metricas_sociais = {
    curtidas: '41.8K',
    seguidores: 853,
    amigos: '250'
  };

  postagens = [
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Idoso',
        mencao_perfil: '@Idoso',
        foto: null
      },
      postagem: {
        mensagem: 'Eu. tEnho. Auzaime',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Antonieta',
        mencao_perfil: '@antonieta',
        foto: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Veja nova lamborghini',
        foto: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Silveiro',
        mencao_perfil: '@silveiro',
        foto: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Olá pessoal, alguém quer aprender CSS?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Marcos',
        mencao_perfil: '@marcos',
        foto: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Se colocar uma calculadora na geladeira, terei tudo friamente calculado?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Marcos',
        mencao_perfil: '@marcos',
        foto: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Se colocar uma calculadora na geladeira, terei tudo friamente calculado?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Mariana',
        mencao_perfil: '@mariana',
        foto: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Se um carro com adesivo guiado por Deus bater, de quem é a culpa?',
        foto: 'https://images.pexels.com/photos/3660425/pexels-photo-3660425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Mônica',
        mencao_perfil: '@mmmica',
        foto: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Galera! Se dois irmãos gêmeos se casam com duas irmãs gêmeas, os filhos vão ser iguais???',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Koringa',
        mencao_perfil: '@kor',
        foto: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Como fala o problema é seu na língua da sua região??',
        foto: 'https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      perfil: {
        nome: 'Juliana',
        mencao_perfil: '@juliana',
        foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Alguém sabe que dinossauro é esse?',
        foto: 'https://images.pexels.com/photos/161959/prehistoric-times-urtier-museum-exhibit-161959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Juliana',
        mencao_perfil: '@juliana',
        foto: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Alguém sabe o nome dessa comida?',
        foto: 'https://images.pexels.com/photos/410857/pexels-photo-410857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    {
      perfil: {
        nome: 'Julia',
        mencao_perfil: '@julia',
        foto: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      postagem: {
        mensagem: 'O que você faria se soubesse que tem apenas mais 24 horas de vida?',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Pedro',
        mencao_perfil: '@pedro',
        foto: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Não confie em tudo que lê na internet',
        foto: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Maria',
        mencao_perfil: '@maria',
        foto: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Hoje é um bom dia para ser feliz',
        foto: null
      }
    },
    {
      perfil: {
        nome: 'Ana',
        mencao_perfil: '@ana',
        foto: 'https://images.pexels.com/photos/3645474/pexels-photo-3645474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      postagem: {
        mensagem: 'Por que não existem elevadores no Pólo Norte?',
        foto: 'https://images.pexels.com/photos/343685/pexels-photo-343685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      perfil: {
        nome: 'Gabriel',
        mencao_perfil: '@gabriel',
        foto: 'https://images.pexels.com/photos/7585838/pexels-photo-7585838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
        postagem: {
          mensagem: 'Qual é a melhor forma de se preparar para uma entrevista de emprego?',
          foto: null
        }
      },
      {
        perfil: {
          nome: 'Laura',
          mencao_perfil: '@laura',
          foto: 'https://images.pexels.com/photos/6695787/pexels-photo-6695787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        postagem: {
          mensagem: 'Você já ouviu falar da técnica Pomodoro?',
          foto: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      {
        perfil: {
          nome: 'Felipe',
          mencao_perfil: '@felipe',
          foto: 'https://images.pexels.com/photos/3991820/pexels-photo-3991820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        postagem: {
          mensagem: 'O que é mais importante na vida?',
          foto: null
        }
      },
      {
        perfil: {
          nome: 'Julia',
          mencao_perfil: '@julia',
          foto: 'https://images.pexels.com/photos/4722061/pexels-photo-4722061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        postagem: {
          mensagem: 'Como manter uma rotina de estudos eficiente?',
          foto: 'https://images.pexels.com/photos/16627028/pexels-photo-16627028/free-photo-of-cafe-da-manha-cafeina-cafe-copo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      }    
  ];

  seguindo: string = 'Seguindo';

  seguir () {
    this.seguindo = (this.seguindo == 'Seguindo') ? (this.metricas_sociais.seguidores += -1, 'Seguir') : (this.metricas_sociais.seguidores += 1, 'Seguindo');
  }
}