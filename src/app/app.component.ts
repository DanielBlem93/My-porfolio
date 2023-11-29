import { Component, Renderer2, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';





  constructor(public sS: ScrollService, public router: Router) {


  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {

    window.scrollTo(0, 0)


  }



  ngAfterViewInit() {

  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    // Deaktiviere die Scroll-Wiederherstellung des Browsers
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

}
