import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('portfolio') portfolio: ElementRef




  portfolioPosition: number
  projectList: any

  constructor(private router: Router, private scrollService: ScrollService, private DataServiceService: DataServiceService) {


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


  redirectToProject(projectUrl: string): void {
    window.open(projectUrl, '_blank');
  }

  ngOnInit(): void {

    console.log(this.projectList)
  }




  ngAfterViewInit(): void {

    this.portfolioPosition = this.scrollService.getElementPosition(this.portfolio)
    this.DataServiceService.portfolioPosition = this.portfolioPosition

  }
}
