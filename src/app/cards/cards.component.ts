import { Component, OnInit } from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = [
    new Card('Some card'),
    new Card('Hey, another flashcard'),
    new Card('w00t'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
