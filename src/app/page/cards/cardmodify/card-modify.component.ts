import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../card';
import {CardService} from '../../../card.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';

@Component({
  selector: 'app-modify',
  templateUrl: './card-modify.component.html',
  styleUrls: ['./card-modify.component.css']
})
export class CardModifyComponent implements OnInit {

  @Input()
  card: Card = new Card();

  isNew: boolean;

  searchCategory = (text: Observable<string>) =>
    text.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cardService.getCategories().filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(private cardService: CardService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId) {
      this.card = this.cardService.getCard(cardId);
    } else {
      this.isNew = true;
    }
  }

  save(card: Card) {
    if (this.isNew) {
      this.cardService.saveCard(card);
    } else {
      this.cardService.updateCard(card);
    }
    this.location.back();
  }
}
