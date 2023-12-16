import { Component } from '@angular/core';

/**
 * Footer Component for handling footer functionality.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../impressum/impressum.component.scss']
})
export class FooterComponent {
  /** Flag indicating whether the Impressum section is open or closed. */
  isImpressumOpen = false;

  /**
   * Toggles the Impressum section's visibility and updates the body's overflow property accordingly.
   */
  openImpressum() {
    if (!this.isImpressumOpen) {
      this.toggleImpressum('unset', 'translateX(0%)', '1');
      document.body.style.overflow = 'hidden';
    } else {
      this.toggleImpressum('none', 'translateX(105%)', '0');
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
    this.isImpressumOpen = !this.isImpressumOpen;
  }

  /**
   * Sets the style properties for the Impressum section and back element to control visibility and animation.
   * @param display - CSS 'display' property value.
   * @param width - CSS 'transform' property value for translating on the X-axis.
   * @param opacity - CSS 'opacity' property value.
   */
  toggleImpressum(display: string, width: string, opacity: string) {
    let impressum = document.getElementById('impressum-container');
    let back = document.getElementById('back');

    impressum.style.opacity = opacity;
    impressum.style.transform = width;
    back.style.display = display;
  }
}
