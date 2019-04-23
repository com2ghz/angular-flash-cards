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
    cardOne.categoryName = 'everything';
    cardOne.description = 'firstCard';
    cardOne.answer = 'Abswer one';

    const cardTwo = new Card();
    cardTwo.id = '2';
    cardTwo.categoryName = 'Cat 1';
    cardTwo.description = 'This is the second card';
    cardTwo.answer = 'Abswer twoooo';

    const cardThree = new Card();
    cardThree.id = '3';
    cardThree.categoryName = 'Cat 2';
    cardThree.description = 'Third one!';
    cardTwo.answer = 'Answer 333333';

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

  getCategories(): string[] {
    const categories: string[] =  this.getCards()
      .map(card => card.categoryName);
    return Array.from(new Set(categories));
  }

  getCardsByCategory(categoryName: string): Card[] {
    return this.getCards().filter(card => card.categoryName === categoryName);
  }
}
