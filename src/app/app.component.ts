import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from './scroll.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';





  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    // Optional: Du kannst die Methode hier aufrufen, wenn du die Scroll-Position sofort erhalten möchtest.
    this.onScroll();
  }

  onScroll() {
    // Hier kannst du auf die aktuelle vertikale Scroll-Position zugreifen
    const scrollTop = this.scrollService.getScrollTop();
    console.log('Current Scroll Position:', scrollTop);
  }
}
