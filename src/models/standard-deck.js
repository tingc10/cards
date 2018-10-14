import {
  STANDARD_CARD_VALUES,
  STANDARD_CARD_TYPES,
  SPECIAL_CARD_TYPES,
  JOKER_CARD_VALUE,

} from '../constants/card-meta';

class StandardDeck {
  constructor({ includeJoker = false } = {}) {
    this.cards = StandardDeck.generateDeck(includeJoker);
    this.shuffleDeck();
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

  shuffleDeck() {
    const newDeck = [];
    while (this.cards.length) {
      const card = this.getRandomCard();
      newDeck.push(card);
    }
    this.cards = newDeck;
  }

  getRandomCard() {
    const totalCards = this.cards.length;
    const randomCardIndex = Math.floor(Math.random() * totalCards);
    return this.cards.splice(randomCardIndex, 1)[0];
  }

  dealCardToPlayer(player) {
    const card = this.cards.pop();
    card.assignPlayer(player);
    return card;
  }

  isEmpty() {
    return !!(this.cards.length);
  }
}