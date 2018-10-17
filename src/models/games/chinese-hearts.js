import { Game } from './game';
import { Table } from '../table';

export class ChineseHearts extends Game {
  constructor() {
    super();
    this.table = new Table();
  }

  async proceedToNextTurn() {
    this.isGameOver();
    this.setNextPlayerIndex();
    const player = this.getCurrentPlayer();
    const cards = await this.waitForPlayerMove(player);
    this.table.playCards(cards);
    this.proceedToNextTurn();
  }

  waitForPlayerMove(player) {
    return new Promise((resolve) => {
      player.assignNextMove(resolve, ChineseHearts.checkValidMove);
    });
  }

  static checkValidMove(cards) {
    return cards.length === 1;
  }

  isGameOver() {
    let gameOver = true;
    this.players.forEach((player) => {
      if (player.hand.length > 0) {
        gameOver = false;
      }
    });
    return gameOver;
  }
}
