import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { AppComponent } from '../app.component';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})



export class AboutMeComponent implements OnInit {

  aboutMePosition: number
  active: boolean

  
  
  constructor(private scrollService: ScrollService, private DataServiceService: DataServiceService) {
    
    
    
    
  }
  
  @ViewChild('aboutMe') aboutme: ElementRef

  ngAfterViewInit(): void {

    this.aboutMePosition = this.scrollService.getElementPosition(this.aboutme)
    this.DataServiceService.aboutMeposition = this.aboutMePosition

  }

  checkActive() {
    // if (this.aboutMePosition < this.scrollService.currentScrollPosition) 
    {
      this.active = true
    }
  }


  ngOnInit(): void {

  }

}