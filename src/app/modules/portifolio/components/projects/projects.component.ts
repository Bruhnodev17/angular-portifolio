import { Component, signal } from '@angular/core';
import { Iprojects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<Iprojects[]>([
    {
      src: 'assets/projects/wallet-app.jpg',
      alt: 'Wallet App',
      title: 'Wallet Interface',
      width: '100px',
      height: '50px',
      description:
        'Desenvolvi uma aplicação mobile de carteira financeira pessoal utilizando React Native, com foco em criar uma experiência visual moderna, fluida e otimizada para dispositivos móveis. Para a construção da interface e das funcionalidades, trabalhei com diversas bibliotecas do ecossistema React Native, explorando transições, animações e componentes customizados que enriquecem a usabilidade do app. O projeto foi estruturado com dados estáticos, permitindo simular o gerenciamento de finanças do usuário, como acompanhamento de entradas e saídas, organização de saldo e categorização de despesas. Além do desenvolvimento funcional, o foco também esteve em explorar layouts criativos, responsividade, padronização visual e práticas reais utilizadas na construção de aplicativos mobile. Essa aplicação contribuiu diretamente para meu aprimoramento em navegação entre telas, controle de estado, animações e boas práticas de desenvolvimento mobile, fortalecendo minha base técnica e visão de produto.',
      links: [
        {
          name: 'Conheça o projeto',
          href: '',
        },
      ],
    },
  ]);
}
