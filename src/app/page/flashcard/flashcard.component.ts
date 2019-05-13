import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../card';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  @Input()
  private card: Card;

  constructor() { }

  ngOnInit() {
    console.log(this.card);
  }

}
