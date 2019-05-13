import { Component, OnInit } from '@angular/core';
import {CardService} from '../../../card.service';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../../../card';
import {log} from 'util';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private categoryName: string;
  private cards: Card[];
  private card: Card;

  constructor(private cardService: CardService, private route: ActivatedRoute) {
    this.categoryName = this.route.snapshot.paramMap.get('categoryName');
    this.cards = this.cardService.getCardsByCategory(this.categoryName);
    this.card = this.cards[0];
  }

  ngOnInit() {
  }

  previousCard() {
    const index = this.getCardIndex();
    if ( index === 0) {
      console.log('First reached');
      return;
    }
    this.card = this.cards[index - 1];
  }

  nextCard() {
    const index = this.getCardIndex();
    if (index === this.cards.length - 1) {
      console.log('Last reached');
      return;
    }
    this.card = this.cards[index + 1];
  }

  private getCardIndex(): number {
    return this.cards.findIndex(item => this.card.id === item.id);
  }


}
