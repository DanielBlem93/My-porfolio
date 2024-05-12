import { Injectable } from '@angular/core';
import { Project } from './project.interface';

/**
 * Service for managing data related to projects.
 */
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  /** Array containing project data. */
  public projectList: Project[];

  /**
   * Constructor for DataServiceService.
   * Initializes the projectList array with project data.
   */
  constructor() {
    this.projectList = [
      {
        name: 'El Pollo loco',
        image: '../../assets/img/projects/Pollo loco 1.svg',
        description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the giant Chicken.',
        technologies: ['JavaScript | HTML | CSS |'],
        githubLink: 'https://github.com/DanielBlem93/el-pollo-loco',
        projectUrl: 'https://daniel-blem.de/el-pollo-loco/index.html',
      },
      {
        name: 'Join',
        image: '../../assets/img/projects/join.svg',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        technologies: ['JavaScript | HTML | CSS'],
        githubLink: 'https://github.com/DanielBlem93/join',
        projectUrl: 'https://daniel-blem.de/join/index.html'
      },
      {
        name: 'DABubble',
        image: '../../assets/img/projects/dabubble-lappi.png ',
        description: 'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
        technologies: ['Angular | TypeScript | HTML | SCSS | Firebase '],
        githubLink: 'https://github.com/DanielBlem93/DA-Bubble',
        projectUrl: 'https://daniel-blem.de/angular-projects/dabubble/index.html',
      },
    ];
  }
}
