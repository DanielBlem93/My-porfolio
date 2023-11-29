import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';
import { Project } from '../project.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {
  portfolioPosition: number
  elementHight: number
  projectList: Project


  constructor(private router: Router,
    private sS: ScrollService,
    public dS: DataServiceService) {

  }


  @ViewChild('portfolio') portfolio: ElementRef
  @HostListener('window:resize')
  onResize() {
    this.sendToDataService()
  }


  redirectToProject(projectUrl: string): void {
    window.open(projectUrl, '_blank');
  }


  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this.sendToDataService()

  }


  sendToDataService() {
    this.getElementHight()
    this.getPortfolioPosition()
  }


  getElementHight() {
    let height = this.portfolio.nativeElement.offsetHeight
    this.elementHight = height
    this.dS.portfolioHight = this.elementHight
    console.log('portfolio height:', height)
  }

  getPortfolioPosition() {
    this.portfolioPosition = this.sS.getElementPosition(this.portfolio)
    this.dS.portfolioPosition = this.portfolioPosition
  }




}
