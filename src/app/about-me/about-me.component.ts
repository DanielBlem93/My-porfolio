import { Component, OnInit } from '@angular/core';
import AOS from "aos"
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})



export class AboutMeComponent implements OnInit {





  ngOnInit(): void {
    AOS.init()
  }
}
