import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Aos from 'aos';
import { DataServiceService } from '../data-service.service';

/**
 * Component for displaying skills with corresponding icons.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public dataService: DataServiceService) {
    
  }


  ngOnInit(): void {
    Aos.init()
  }

  @ViewChild('skills') skills: ElementRef;


  imageUrls: string[] = [
    '/assets/img/icons/Angular.svg',
    '/assets/img/icons/TypeScript.svg',
    '/assets/img/icons/JavaScript.svg',
    '/assets/img/icons/HTML.svg',
    '/assets/img/icons/CSS.svg',
    '/assets/img/icons/Firebase.svg',
    // '/assets/img/icons/WordPress.svg',
    '/assets/img/icons/GIT.svg',
    '/assets/img/icons/Rest-Api.svg',
    '/assets/img/icons/Scrum.svg',
    '/assets/img/icons/Material Design.svg',
  ];

  /**
   * Extracts the file name without extension from a given URL.
   * @param url - The URL of the file.
   * @returns The file name without extension.
   */
  getFileName(url: string): string {
    const fileNameWithExtension = url.split('/').pop(); 
    const fileNameWithoutExtension = fileNameWithExtension?.split('.')[0];
    return fileNameWithoutExtension || '';
  }
}
