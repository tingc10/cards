export class Deck {
  constructor() {
    this.cards = [];
    this.length = this.cards.length;
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
    const card = this.cards.splice(randomCardIndex, 1)[0];
    this.length = this.cards.length;
    return card;
  }

  dealCardToPlayer(player) {
    if (!this.cards.length) {
      throw new Error('No more cards to distribute');
    }
    const card = this.cards.pop();
    this.length = this.cards.length;
    card.assignPlayer(player);
    return card;
  }

  isEmpty() {
    return !!(this.cards.length);
  }

  addCard(card) {
    this.cards.push(card);
  }

  addCards(cards = []) {
    this.cards = this.cards.concat(cards);
  }
}
