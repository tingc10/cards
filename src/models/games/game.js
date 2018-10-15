import { StandardDeck } from "../standard-deck";

export class Game {
  constructor({ includeJoker = false } = {}) {
    this.players = [];
    this.playersCount = 0;
    this.deck = new StandardDeck({ includeJoker });
  }

  registerPlayers(players = []) {
    if (!Array.isArray(players)) return;
    this.players = this.players.concat(players);
    this.playersCount = this.players.length;
  }

  splitDeck() {
    const totalCards = this.deck.length;
    const cardsPerPlayer = Math.floor(totalCards / this.playersCount);
    if (cardsPerPlayer > 0) {
      this.distributeCardsPerPlayer(cardsPerPlayer);
    }
  }

  distributeCardsPerPlayer(cardsPerPlayer) {
    let cardCount = 0;
    while (cardCount < cardsPerPlayer) {
      this.players.forEach((player) => {
        const card = this.deck.dealCardToPlayer(player);
        player.takeCard(card);
      });
      cardCount += 1;
    }
  }

  // startGame() {

  // }

  // endGame() {

  // }
}
