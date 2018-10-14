/* TABLE */
class Table() {
  constructor() {

  }
}

/* PLAYER */
class Player() {
  constructor() {
    this.hand = [];
    this.selectedCardIndices = [];
    this.id = '';
  }

  takeCard(card) {
    this.hand.push(card);
  }

  clearHand() {
    this.hand = [];
  }

  dealSelectedCards() {
    const dealtCards = [];
    this.selectedCardIndices()
    return dealtCards;
  }

  getCard({ type, name }) {
    return this.hand.findIndex((card) => {
      return card.type === type && card.name === name;
    });
  }

  selectCardWithAttributes() {

  }

  deselectCardWithAttributes() {

  }

  selectCardAtIndex() {

  }

  deselectCardAtIndex() {

  }
}