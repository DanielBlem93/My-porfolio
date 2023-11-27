import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @ViewChild('skills') skills: ElementRef


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

  constructor(private scrollService: ScrollService, private DataServiceService: DataServiceService) {

  }


  ngAfterViewInit(): void {

    this.skillsPosition = this.scrollService.getElementPosition(this.skills)
    this.DataServiceService.skillsPosition = this.skillsPosition

  }
}
