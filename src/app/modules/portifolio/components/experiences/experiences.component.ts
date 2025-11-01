import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'INTERN CHALLENGE',
        p: 'UI Teconologia S.A',
      },
      text: 'Durante o processo seletivo para uma vaga de estágio em uma software house, participei de um teste técnico desafiador, onde precisei desenvolver um sistema de controle de estoque. O desafio consistia em construir uma aplicação full stack, criando todo o frontend em Angular, o backend em Laravel e realizando a persistência dos dados em um banco PostgreSQL. Mesmo tendo experiência anterior apenas com React, utilizei minha rapidez de aprendizagem e adaptação sob demanda para dominar as tecnologias necessárias e concluir o projeto dentro dos requisitos. O sistema desenvolvido permitia criar, editar, excluir e pesquisar produtos, oferecendo uma interface simples e funcional para gerenciamento de estoque — um CRUD completo, estruturado com boas práticas e organização de código. Finalizei todo o desafio com sucesso, demonstrando minha capacidade de resolução de problemas, aprendizado acelerado e entrega de resultados mesmo em cenários novos e desafiadores.',
    },
  ]);
}
