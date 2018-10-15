import Vue from 'vue'
import App from './App.vue'

import { Game } from './models/games/game';
import { Player } from './models/player';

Vue.config.productionTip = false

const game = new Game({ includeJoker: true });
const player1 = new Player({ id: 1 });
const player2 = new Player({ id: 1 });
game.registerPlayers([player1, player2]);
game.splitDeck();
console.log(game);


new Vue({
  render: h => h(App)
}).$mount('#app')
