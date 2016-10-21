import { Component, Input } from '@angular/core';
import { IHero } from '../ihero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero: IHero;

  constructor() {  
    this.hero = {
      id: 1,
      name: 'hassan'
    };
  }
  
}
