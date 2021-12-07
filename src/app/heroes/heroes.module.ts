import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    // Specify the content: components, pipes
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  // What I want to make public
  exports: [
    ListComponent
  ],
  // Specify the modules
  imports: [
    // Allows to use ng directives
    CommonModule
  ]
})
export class HeroesModule {

}