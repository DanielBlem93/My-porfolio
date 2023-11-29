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
  contactPosition: number
  scrollEvent: Observable<number>;


  @HostListener('window: scroll')
  onscroll() {
    this.setPositions()
    console.log('aboutme',this.aboutMeposition)
    console.log('portfolio',this.portfolioPosition)
    console.log('skills',this.skillsPosition)
    console.log('skills',this.contactPosition)
  }
  onResize() {
    this.setPositions()
  }


  constructor(private sS: ScrollService, public dS: DataServiceService) {
    this.scrollEvent = this.sS.scrollEvent;
    this.scrollEvent.subscribe((scrollY) => {
      console.log('aktueller Wert', scrollY)
    })

  }



  ngAfterViewInit(): void {

  }

  setPositions() {
    this.aboutMeposition = this.dS.aboutMeposition
    this.skillsPosition = this.dS.skillsPosition
    this.portfolioPosition = this.dS.portfolioPosition
    this.contactPosition = this.dS.contactPosition
  }
}