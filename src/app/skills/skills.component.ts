import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

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
  getFileName(url: string): string {
    // Extrahiere den Dateinamen und entferne die Dateiendung
    const fileNameWithExtension = url.split('/').pop(); // Letztes Element nach dem Split
    const fileNameWithoutExtension = fileNameWithExtension?.split('.')[0];
    return fileNameWithoutExtension || '';
  }
}
