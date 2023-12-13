import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../impressum/impressum.component.scss']
})
export class FooterComponent {
  isImpressumOpen = false;



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

  toggleImpressum(display: string, width: string, opacity:string) {
    let impressum = document.getElementById('impressum-container');
    let back = document.getElementById('back');

    impressum.style.opacity = opacity;
    impressum.style.transform = width;
    back.style.display = display;

  }


}
