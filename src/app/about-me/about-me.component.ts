import { Component, OnInit } from '@angular/core';
import AOS from "aos"
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})



export class AboutMeComponent implements OnInit {



constructor(public dataService: DataServiceService) {
  
}

  ngOnInit(): void {
    AOS.init()
  }
}
