import { Component, Renderer2, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';





  constructor(public router: Router) { }


}
