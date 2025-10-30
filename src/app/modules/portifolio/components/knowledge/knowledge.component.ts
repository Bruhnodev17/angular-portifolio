import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de Typescript',
    },
    {
      src: 'assets/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
    },
    {
      src: 'assets/knowledge/react-native.svg',
      alt: 'Ícone de conhecimento de React Native',
    },
    {
      src: 'assets/knowledge/node.svg',
      alt: 'Ícone de conhecimento de Node Js',
    },
    {
      src: 'assets/knowledge/js.svg',
      alt: 'Ícone de conhecimento de Javascript',
    },
    {
      src: 'assets/knowledge/git.svg',
      alt: 'Ícone de conhecimento de Git',
    },
    {
      src: 'assets/knowledge/github.svg',
      alt: 'Ícone de conhecimento de Github',
    },
  ]);
}
