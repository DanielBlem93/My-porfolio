import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
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



  constructor(private dS: DataServiceService) {

  }

 

}