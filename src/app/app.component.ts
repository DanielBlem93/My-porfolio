import { Component, Renderer2,ElementRef,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  



  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
    // Finde alle Links mit der Klasse "scroll-link"
    const scrollLinks = this.el.nativeElement.querySelectorAll('.scroll-link');

    // Iteriere durch alle Links
    scrollLinks.forEach(link => {
      // Finde das Ziel des Links
      const targetId = link.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      // Überprüfe, ob das Ziel im sichtbaren Bereich ist
      if (this.isElementInViewport(targetElement)) {
        // Setze den aktiven Abschnitt
        this.activeSection = targetId;
      }
    });
  }

  // Funktion, um zu überprüfen, ob ein Element im sichtbaren Bereich ist
  private isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
}
