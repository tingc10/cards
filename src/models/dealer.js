import { Player } from './player';

export class Dealer extends Player {
  constructor(game = null) {
    super();
    this.id = 'dealer';
  }
}
