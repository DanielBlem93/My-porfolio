
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