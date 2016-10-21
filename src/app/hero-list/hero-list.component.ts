import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { IHero } from '../ihero'

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent {
  heroes: IHero[];
  selectedHero: IHero;

  constructor(heroService: HeroService) { 
    this.heroes = heroService.getHeroes();
  }

  onSelect(hero): void {
    this.selectedHero = hero;
  }
}
