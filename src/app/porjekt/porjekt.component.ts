import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-porjekt',
  templateUrl: './porjekt.component.html',
  styleUrls: ['./porjekt.component.scss']
})
export class PorjektComponent {
  projectName!: string;
  @Input() projectImage!: string;
  @Input() description!: string;
  @Input() technologies!: string[];
  @Input() githubLink!: string;
  @Input() projectUrl!: string;

  public test = "Test bestanden"
  constructor() {
    this.projectName = "test"
  }
}
