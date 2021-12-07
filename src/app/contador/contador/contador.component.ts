import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  counterValue: number = 0;
  base: number = 5;

  updateCounter(value: number): void {
    this.counterValue += value;
  }
}
