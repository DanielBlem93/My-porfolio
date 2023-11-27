import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {
  aboutMeposition: number
  skillsPosition: number
  portfolioPosition: number
  scrollEvent: Observable<number>;


  @HostListener('window: scroll')
  onscroll() {
    this.aboutMeposition = this.DataServiceService.aboutMeposition
    this.skillsPosition = this.DataServiceService.skillsPosition
    this.portfolioPosition = this.DataServiceService.portfolioPosition
    console.log('position' ,this.portfolioPosition)
  }





  constructor(private scrollService: ScrollService, private DataServiceService: DataServiceService) {
    this.scrollEvent = this.scrollService.scrollEvent;
    this.scrollEvent.subscribe((scrollY) => {

      console.log('aktueller Wert', scrollY)
    })

  }

  

  ngAfterViewInit(): void {


  }
}