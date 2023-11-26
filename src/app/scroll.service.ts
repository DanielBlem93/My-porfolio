import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollTop: number = 0;

activeSection :string =''

  getScrollTop(): number {
    return this.scrollTop;
  }

  @HostListener('document:scroll', [])
  onScroll() {
    this.scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll position:', this.scrollTop);
    console.log(this.getScrollTop())
  }
}
