import { Component, OnInit } from '@angular/core';
import { PorjektComponent } from '../porjekt/porjekt.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // projekt: PorjektComponent;


  projectList: any

  constructor(private router: Router) {


    this.projectList = [

      {
        name: 'El Pollo loco',
        image: '../../assets/img/projects/Pollo loco 1.svg',
        description: ' A simple Jump-and-Run game based on an object-oriented approach. HelpPepe to find coins and salsa bottles to fight against the gaintChicken.',
        technologies: ['JavaScript ' + ' | ' + 'HTML' + " | " + 'CSS'],
        githubLink: 'https://github.com/DanielBlem93/el-pollo-loco',
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

  
  redirectToProject(projectUrl: string  ): void {
    window.open(projectUrl, '_blank');
  }

  ngOnInit(): void {

    console.log(this.projectList)
  }
}
