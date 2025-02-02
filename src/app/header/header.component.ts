import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataServiceService } from '../data-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})


export class HeaderComponent {

  isMenuOpen = false;


  @HostListener('window: resize')
  onResize() {
    this.isMenuOpen = false;
    this.toggleNav('translateX(105vw)', '0')
  }


  constructor(public dataService: DataServiceService) { }


  animationImages = [
    '../../assets/img/icons/burgermenu1.svg',
    '../../assets/img/icons/burgermenu4.svg',
  ];


  toggleMenu() {

    if (this.isMenuOpen) {

      this.toggleNav('translateX(105vw)', '0')
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';

    } else {
      this.toggleNav('translateX(0)', '1')
      document.body.style.overflow = 'hidden';

    }
    this.isMenuOpen = !this.isMenuOpen;
  }


  toggleNav(width: string, opacity: string) {
    let nav = document.getElementById('nav-menu');
    nav.style.opacity = opacity
    nav.style.transform = width;

  }


  changeLang(lang: string) {
    this.dataService.lang = lang;
  }
}