import { Injectable } from '@angular/core';
import {Card} from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [];

  constructor() {
    const cardOne = new Card();
    cardOne.id = 1;
    cardOne.description = 'firstCard';

    const cardTwo = new Card();
    cardTwo.id = 2;
    cardTwo.description = 'This is the second card';

    const cardThree = new Card();
    cardThree.id = 3;
    cardThree.description = 'Third one!';

    this.cards.push(cardOne, cardTwo, cardThree);
  }

  getCards(): Card[] {
    return this.cards;
  }
}
