import { Deck } from './deck';
/* TABLE */
export class Table {
  constructor() {
    this.visibleCards = new Deck();
  }

  playCard(card) {
    this.visibleCards.addCard(card);
  }
}
