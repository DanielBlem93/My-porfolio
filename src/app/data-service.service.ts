import { Injectable } from '@angular/core';
import { Project } from './project.interface';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  lang: string = 'de';

  public projectList: Project[];


  constructor() {
    this.setProjects()
  }

  setProjects() {

    this.projectList = [
      {
        name: 'Join',
        image: '../../assets/img/projects/join.svg',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        descriptionDE: 'Ein Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie ihnen Benutzer und Kategorien zu.',
        technologies: ['Angular | TypeScript | HTML | SCSS | Firebase '],
        githubLink: 'https://github.com/DanielBlem93/Join-with-angular',
        projectUrl: 'https://join.daniel-blem.de/index.html'
      },
      {
        name: 'El Pollo loco',
        image: '../../assets/img/projects/Pollo loco 1.svg',
        description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the giant Chicken.',
        descriptionDE: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Salsaflaschen zu finden, um gegen das riesige Huhn zu kämpfen.',
        technologies: ['JavaScript | HTML | CSS '],
        githubLink: 'https://github.com/DanielBlem93/el-pollo-loco',
        projectUrl: 'https://el-pollo-loco.daniel-blem.de/index.html',
      },
      {
        name: 'DABubble',
        image: '../../assets/img/projects/dabubble-lappi.png ',
        description: 'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
        descriptionDE: 'Eine Slack-Klon-App, die eine reibungslose Teamkommunikation und -zusammenarbeit durch Messaging, Dateifreigabe und anpassbare Kanäle ermöglicht, um die Effizienz am Arbeitsplatz zu steigern.',
        technologies: ['Angular | TypeScript | HTML | SCSS | Firebase '],
        githubLink: 'https://github.com/DanielBlem93/DA-Bubble',
        projectUrl: 'https://dabubble.daniel-blem.de/singup',
      },
      {
        name: 'Pokedex',
        image: '../../assets/img/projects/pokedex.png ',
        description: 'This Pokedex web app provides information about Pokémon, sourced from the PokéAPI.',
        descriptionDE: 'Diese Pokedex-Web-App bietet Informationen über Pokémon, die von der PokéAPI stammen.',
        technologies: ['JavaScript | HTML | CSS '],
        githubLink: 'https://github.com/DanielBlem93/Pokedex-with-JS',
        projectUrl: 'https://pokedex.daniel-blem.de/index.html',
      },
    ];
  }

}
