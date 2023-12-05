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
  isMenuOpen = false;

  @HostListener('window: scroll')
  onscroll() {
    this.setPositions()
  }
  @HostListener('window: resize')
  onResize() {
    this.setPositions()
    this.isMenuOpen = false;
  }


  constructor(private sS: ScrollService, public dS: DataServiceService) {
    this.scrollEvent = this.sS.scrollEvent;
    this.scrollEvent.subscribe

  }

  setPositions() {
    this.aboutMeposition = this.dS.aboutMeposition
    this.skillsPosition = this.dS.skillsPosition
    this.portfolioPosition = this.dS.portfolioPosition
    this.contactPosition = this.dS.contactPosition
  }

  animationImages = [
    '../../assets/img/icons/burgermenu1.svg',
    '../../assets/img/icons/burgermenu4.svg',
  ];

  isPlayingForward = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }
}