import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./porjekt.component.scss']
})
export class ProjektComponent {
  projectName!: string;
  @Input() projectImage!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() githubLink!: string;
  @Input() projectUrl!: string;


  constructor() {

  }
}
