import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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


  @HostListener('window: resize')
  onResize() {
    this.isMenuOpen = false;
  }


  constructor(public dS: DataServiceService) {

  }



  animationImages = [
    '../../assets/img/icons/burgermenu1.svg',
    '../../assets/img/icons/burgermenu4.svg',
  ];

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