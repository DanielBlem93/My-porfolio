import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @ViewChild('skills') skills: ElementRef

  elementHight: number;
  skillsPosition: number

  imageUrls: string[] = [
    '/assets/img/icons/Angular.svg',
    '/assets/img/icons/TypeScript.svg',
    '/assets/img/icons/JavaScript.svg',
    '/assets/img/icons/HTML.svg',
    '/assets/img/icons/CSS.svg',
    '/assets/img/icons/Firebase.svg',
    '/assets/img/icons/WordPress.svg',
    '/assets/img/icons/GIT.svg',
    '/assets/img/icons/Rest-Api.svg',
    '/assets/img/icons/Scrum.svg',
    '/assets/img/icons/Material Design.svg',

  ]

  getFileName(url: string) {
    // Extrahiere den Dateinamen und entferne die Dateiendung
    const fileNameWithExtension = url.split('/').pop(); // Letztes Element nach dem Split
    const fileNameWithoutExtension = fileNameWithExtension?.split('.')[0];
    return fileNameWithoutExtension || '';
  }

  constructor(private sS: ScrollService, private dS: DataServiceService) {

  }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this.sendToDataService()

  }

  @HostListener('window:resize')
  onResize() {
    this.sendToDataService()
  }


  sendToDataService() {
    this.getElementHight()
    this.getSkillsPosition()
  }


  getElementHight() {
    let height = this.skills.nativeElement.offsetHeight
    this.elementHight = height
    this.dS.skillsHight = this.elementHight
    console.log('skills height:', height)
  }

  getSkillsPosition() {
    this.skillsPosition = this.sS.getElementPosition(this.skills)
    this.dS.skillsPosition = this.skillsPosition
  }



}
