import { Component, OnInit } from '@angular/core';
import {Card} from '../../../card';
import {CardService} from '../../../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public cardService: CardService) { }

  ngOnInit() {
  }

  getCards(): Card[] {
    return this.cardService.getCards();
  }

}
