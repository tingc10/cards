import { StandardDeck } from "../standard-deck";

const GameStatus = {
  PAUSED: 'PAUSED',
  IN_PROGRESS: 'IN_PROGRESS',
}

export class Game {
  constructor({ includeJoker = false } = {}) {
    this.players = [];
    this.playersCount = 0;
    this.deck = new StandardDeck({ includeJoker });
    this.phase = GameStatus.PAUSED;
    this.currentPlayerIndex = -1;
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

  getRandomPlayerIndex() {
    return Math.floor(Math.random() * this.playersCount);
  }

  getNextPlayerIndex(skip = 0) {
    if (this.currentPlayerIndex === -1) {
      return this.getRandomPlayerIndex();
    }
    return (this.currentPlayerIndex + 1 + skip) % this.playersCount;
  }

  setNextPlayerIndex({ skip = 0, nextPlayerIndex = null } = {}) {
    this.currentPlayerIndex = nextPlayerIndex !== null ? nextPlayerIndex : this.getNextPlayerIndex(skip);
  }

  getPlayerAtIndex(index) {
    return this.players[index];
  }

  getCurrentPlayer() {
    if (this.currentPlayerIndex === -1) {
      console.error('No current player assigned.');
    }
    return this.getPlayerAtIndex(this.currentPlayerIndex);
  }

  startGame() {
    this.setNextPlayerIndex();
  }

  // endGame() {

  // }
}
