import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from '../data-service.service';
import { Project } from '../project.interface';
import Aos from 'aos';

/**
 * Component for displaying a portfolio of projects.
 */
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  ngOnInit(): void {
    Aos.init()
  }
  /** List of projects for the portfolio. */
  projectList: Project;

  /**
   * Constructor for PortfolioComponent.
   * @param router - The Angular router service.
   * @param dS - The data service for managing project data.
   */
  constructor(private router: Router, public dS: DataServiceService) { }

  /** Reference to the portfolio element. */
  @ViewChild('portfolio') portfolio: ElementRef;

  /**
   * Redirects to the project's URL in a new tab.
   * @param projectUrl - The URL of the project.
   */
  redirectToProject(projectUrl: string): void {
    window.open(projectUrl, '_blank');
  }

}
