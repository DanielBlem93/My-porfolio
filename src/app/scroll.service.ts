// import { Injectable, HostListener, ViewChild, ElementRef } from '@angular/core';
// import { AboutMeComponent } from './about-me/about-me.component';
// import { SkillsComponent } from './skills/skills.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
// @Injectable({
//   providedIn: 'root'
// })
// export class ScrollService {
//   public activeSection: string = ''
//   public currentScrollPosition: number = 0
//   public aboutMeSelektor:ElementRef
//   public skillsSelektor:ElementRef
//   public portfolioSelektor:ElementRef

  
//   getCurrentScrollPosition() {
//     return window.scrollY
//   }

//   initScrollPosition() {
//     this.currentScrollPosition = this.getCurrentScrollPosition()
//   }




//   checkScrolWithElement(position, element) {

//     if (position < element) {
//       this.activeSection = 'about-me'

//     }
//   }


// }

// scroll.service.ts


import { Injectable,ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public scrollEvent: Observable<number>;

  constructor() {
    this.scrollEvent = fromEvent(window, 'scroll').pipe(
      map(() => window.scrollY)
    );
  }

  getElementPosition(element: ElementRef) {
    const { x, y } = element.nativeElement.getBoundingClientRect();
    return y
  }


}