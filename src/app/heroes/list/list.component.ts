import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Wolverine', 'Dante', 'Vergil'];
  hero: string = '';

  eraseHero() {
    console.log('Erasing...');
    this.hero = this.heroes.shift() ?? '';
  }

}
