import { Injectable } from '@angular/core';
import {Card} from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  cards = [
    new Card(1, 'Some card'),
    new Card(2, 'Hey, another flashcard'),
    new Card(3, 'w00t'),
  ];

  getCards(): Card[] {
    return this.cards;
  }
}
