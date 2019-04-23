import { Component, OnInit } from '@angular/core';
import {CardService} from '../../../card.service';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  getCategories(): string[] {
    return this.cardService.getCategories();
  }

}
