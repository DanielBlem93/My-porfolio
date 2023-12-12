import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from '../data-service.service';
import { Project } from '../project.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent {
  portfolioPosition: number
  elementHight: number
  projectList: Project


  constructor(private router: Router,
    public dS: DataServiceService) {

  }
  @ViewChild('portfolio') portfolio: ElementRef


  redirectToProject(projectUrl: string): void {
    window.open(projectUrl, '_blank');
  }




}
