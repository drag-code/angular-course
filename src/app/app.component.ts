import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue: number = 0;
  base: number = 10;
  title: string = "Counter App";

  accumulate(value: number): void {
    this.counterValue += value;  
  }
}
