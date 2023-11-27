import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public aboutMeposition: number
  public skillsPosition: number
  public portfolioPosition: number



  constructor() { }
}
