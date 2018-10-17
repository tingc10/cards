/* PLAYER */
export class Player {
  constructor({ id = 'player', hand = [] } = {}) {
    this.hand = hand;
    this.selectedCards = [];
    this.id = id;
    this.nextMove = null;
    this.moveValidator = null;
  }

  takeCard(card) {
    this.hand.push(card);
  }

  takePile(pile = []) {
    this.hand = this.hand.concat(pile);
  }

  clearHand() {
    this.hand = [];
  }

  pluckSelectedCards() {
    const dealtCards = this.selectedCards;
    this.selectedCards = [];
    return dealtCards
  }

  static getCardIndexWithAttributes(pile, { type, name }) {
    return pile.findIndex((card) => {
      return card.type === type && card.name === name;
    });
  }

  static shiftCardBetweenPiles(fromPile, toPile, attributes = {}, index = null) {
    const selectedCardIndex = index ? index : Player.getCardIndexWithAttributes(fromPile, attributes);
    if (selectedCardIndex !== -1 && fromPile[selectedCardIndex]) {
      const selectedCard = fromPile.splice(selectedCardIndex, 1)[0];
      toPile.push(selectedCard);
      return selectedCard;
    }
    return null;
  }

  selectCardWithAttributes(attributes) {
    return Player.shiftCardBetweenPiles(this.hand, this.selectedCards, attributes);
  }

  deselectCardWithAttributes(attributes) {
    return Player.shiftCardBetweenPiles(this.selectedCards, this.hand, attributes);
  }

  selectCardAtIndex(index) {
    return Player.shiftCardBetweenPiles(this.hand, this.selectedCards, null, index);
  }

  deselectCardAtIndex(index) {
    return Player.shiftCardBetweenPiles(this.selectedCards, this.hand, null, index);
  }

  assignNextMove(resolve, moveValidator) {
    this.nextMove = resolve;
    this.moveValidator = moveValidator;
  }

  playNextMoveWithSelectedCards() {
    if (!this.nextMove) return;
    if (this.moveValidator && this.moveValidator(this.selectedCards)) {
      const dealtCards = this.pluckSelectedCards();
      this.nextMove(dealtCards);
    } else {
      console.error('Cannot validate cards or invalid move');
    }
  }
}
