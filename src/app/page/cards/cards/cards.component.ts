import { Component, OnInit } from '@angular/core';
import {Card} from '../../../card';
import {CardService} from '../../../card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  private router: Router;

  constructor(private cardService: CardService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  getCards(): Card[] {
    return this.cardService.getCards();
  }

  newCard() {
    this.router.navigateByUrl('/cards/new');
  }

  deleteCard(cardId: string) {
    this.cardService.deleteCard(cardId);
  }
}
