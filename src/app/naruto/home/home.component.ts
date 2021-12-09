import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  character: Character = {
    characterName: "",
    characterPower: 0
  }

  ngOnInit(): void {
    this.characters = [
      {
        characterName: "Naruto",
        characterPower: 5000
      },
      {
        characterName: "Sasuke",
        characterPower: 5000
      },
      {
        characterName: "Shikamaru",
        characterPower: 3000
      },
      {
        characterName: "Rock Lee",
        characterPower: 6000
      }
    ]
  }

  addNewCharacter(character: Character) {
    this.characters.push(character);
  }
}
