import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardsComponent } from './page/cards/cards/cards.component';
import { CardModifyComponent } from './page/cards/cardmodify/card-modify.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './page/quiz/quiz/quiz.component';
import { QuizlistComponent } from './page/quiz/quizlist/quizlist.component';
import { FlashcardComponent } from './page/flashcard/flashcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CardsComponent,
    CardModifyComponent,
    QuizComponent,
    QuizlistComponent,
    FlashcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
