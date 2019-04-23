import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CardsComponent} from './page/cards/cards/cards.component';
import {CardModifyComponent} from './page/cards/cardmodify/card-modify.component';
import {QuizComponent} from './page/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards/new', component: CardModifyComponent },
  { path: 'cards/:id', component: CardModifyComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
