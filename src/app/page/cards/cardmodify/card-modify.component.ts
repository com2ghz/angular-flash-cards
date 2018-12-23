import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../card';

@Component({
  selector: 'app-modify',
  templateUrl: './card-modify.component.html',
  styleUrls: ['./card-modify.component.css']
})
export class CardModifyComponent implements OnInit {


  @Input()
  card: Card;

  constructor() { }

  ngOnInit() {
    this.card = new Card(1, 'wtfff');
  }

  save(card: Card) {
    console.log(this.card);
  }
}
