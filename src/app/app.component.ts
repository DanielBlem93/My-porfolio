import { Component, Renderer2, ElementRef, HostListener, ViewChild, } from '@angular/core';
import { ScrollService } from './scroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';





  constructor(public scrollService: ScrollService) {


  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // this.scrollService.initScrollPosition()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // this.scrollService.initScrollPosition()

  }



  ngAfterViewInit() {
  
  }
  ngOnInit() {

  }


}
