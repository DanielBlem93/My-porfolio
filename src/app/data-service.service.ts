import { Injectable, ElementRef } from '@angular/core';
import { Project } from './project.interface';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public aboutMeposition: number
  public aboutMeHight: number
  public skillsPosition: number
  public skillsHight: number
  public portfolioPosition: number
  public portfolioHight: number
  public contactPosition: number
  public projectList: Project[]


  constructor(public sS: ScrollService) {


    this.projectList = [

      {
        name: 'El Pollo loco',
        image: '../../assets/img/projects/Pollo loco 1.svg',
        description: ' A simple Jump-and-Run game based on an object-oriented approach. HelpPepe to find coins and salsa bottles to fight against the gaintChicken.',
        technologies: ['JavaScript ' + ' | ' + 'HTML' + " | " + 'CSS'],
        githubLink: 'https://github.com/DanielBlem93/el-pollo-loco',
        projectUrl: 'https://project1.com',
      },

      {
        name: 'Join',
        image: '../../assets/img/projects/join.svg',
        description: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. `,
        technologies: ['JavaScript ' + ' | ' + 'HTML' + " | " + 'CSS'],
        githubLink: 'https://github.com/DanielBlem93/join',
        projectUrl: 'https://project1.com'
      },
      {
        name: 'Join',
        image: '../../assets/img/projects/join.svg',
        description: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. `,
        technologies: ['JavaScript ' + ' | ' + 'HTML' + " | " + 'CSS'],
        githubLink: 'https://github.com/DanielBlem93/join',
        projectUrl: 'https://project1.com'
      },
      {
        name: 'Join',
        image: '../../assets/img/projects/join.svg',
        description: `Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. `,
        technologies: ['JavaScript ' + ' | ' + 'HTML' + " | " + 'CSS'],
        githubLink: 'https://github.com/DanielBlem93/join',
        projectUrl: 'https://project1.com'
      },
    ]
  }



}
