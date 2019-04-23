import { Component, OnInit } from '@angular/core';
import {CardService} from '../../card.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  getCategories(): string[] {
    return this.cardService.getCategories();
  }

}
