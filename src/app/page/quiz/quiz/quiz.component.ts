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

  constructor(private cardService: CardService, private route: ActivatedRoute) {
    this.categoryName = this.route.snapshot.paramMap.get('categoryName');
    this.cards = this.cardService.getCardsByCategory(this.categoryName);
  }

  ngOnInit() {
  }

}
