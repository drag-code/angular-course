import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input()
  characters: Character[] = [];

  ngOnInit(): void {
  }



}
