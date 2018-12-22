import { Component, OnInit } from '@angular/core';
import {Card} from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = [
    new Card(1, 'Some card'),
    new Card(2, 'Hey, another flashcard'),
    new Card(3, 'w00t'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
