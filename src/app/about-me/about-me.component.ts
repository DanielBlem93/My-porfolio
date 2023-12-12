import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})



export class AboutMeComponent {
  elementHight: number
  aboutMePosition: number
  active: boolean



  constructor(private sS: ScrollService, private dS: DataServiceService) {

  }

  @ViewChild('aboutMe') aboutme: ElementRef

  ngAfterViewInit(): void {
    this.sendToDataService()
  }




  @HostListener('window:resize')
  onResize() {
    this.sendToDataService()
    console.log('aboutMe height:', this.elementHight)
  }

  sendToDataService() {
    this.getElementHight()
    this.getAboutMePosition()
  }


  getElementHight() {
    let height = this.aboutme.nativeElement.offsetHeight
    if (height <= 0) {
      height = 0
    }
    this.elementHight = height
    this.dS.aboutMeHight = this.elementHight
    console.log('aboutMe height:', height)
  }

  getAboutMePosition() {
    this.aboutMePosition = this.sS.getElementPosition(this.aboutme)
    this.dS.aboutMeposition = this.aboutMePosition
  }




}