import { Injectable } from '@angular/core';
import {Card} from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = [];

  constructor() {
    const cardOne = new Card();
    cardOne.id = '1';
    cardOne.description = 'firstCard';

    const cardTwo = new Card();
    cardTwo.id = '2';
    cardTwo.description = 'This is the second card';

    const cardThree = new Card();
    cardThree.id = '3';
    cardThree.description = 'Third one!';

    this.cards.push(cardOne, cardTwo, cardThree);
  }

  getCards(): Card[] {
    return this.cards;
  }

  getCard(cardId: string) {
    return this.getCards().find(card => card.id === cardId);
  }

  deleteCard(cardId: string) {
    const cardIndex = this.cards.findIndex(card => card.id === cardId);
    this.cards.splice(cardIndex, 1);
  }

  saveCard(card: Card) {
    const newCardId = this.cards.length + 1;
    card.id = newCardId.toString();
    this.cards.push(card);
  }

  updateCard(card: Card) {
    const cardIndex = this.cards.findIndex(cardEntry => cardEntry.id === card.id);
    this.cards[cardIndex] = card;
  }
}
