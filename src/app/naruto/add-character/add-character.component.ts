import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  @Input()
  character: Character = {
    characterName: "",
    characterPower: 0
  }

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  ngOnInit(): void {
  }

  addCharacter(): void {

    this.onNewCharacter.emit(this.character);

    this.character = {
      characterName: "",
      characterPower: 0
    }
  }

}
