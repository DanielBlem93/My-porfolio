import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ScrollService } from '../scroll.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {



  constructor(public scrollService: ScrollService) {


  }

}
