import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id:uuid(),
      name:"Krillin",
      power:1000
    },
    {
      id:uuid(),
      name:"Goku",
      power:9500
    },
    {
      id:uuid(),
      name:"Vegeta",
      power:10000
    }
  ];

  addCharacter(character:Character){
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  // delCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  delCharacterById(id:string){
    this.characters = this.characters.filter( x => x.id != id);
  }
}
