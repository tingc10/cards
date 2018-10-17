import {
  STANDARD_CARD_VALUES,
  STANDARD_CARD_TYPES,
  SPECIAL_CARD_TYPES,
  JOKER_CARD_VALUE,

} from '../constants/card-meta';
import { Card } from './card';
import { Deck } from './deck';

export class StandardDeck extends Deck {
  constructor({ includeJoker = false } = {}) {
    super();
    this.cards = StandardDeck.generateDeck(includeJoker);
    this.shuffleDeck();
    this.length = this.cards.length;
  }

  static generateDeck(includeJoker) {
    let deck = STANDARD_CARD_TYPES.map(StandardDeck.generateSet);
    if (includeJoker) {
      deck = deck.concat(StandardDeck.generateSpecialCards());
    }
    return deck.flat();
  }

  static generateSet(cardType) {
    return STANDARD_CARD_VALUES.map((cardValue) => {
      return new Card({ ...cardType, ...cardValue });
    });
  }

  static generateSpecialCards() {
    return SPECIAL_CARD_TYPES.map((cardValue) => {
      return new Card({ ...cardValue, ...JOKER_CARD_VALUE });
    });
  }
}
