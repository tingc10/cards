<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script>
import { Game } from "../models/games/game";
import { Player } from "../models/player";

const game = new Game({ includeJoker: true });
const player1 = new Player({ id: 1 });
const player2 = new Player({ id: 2 });
game.registerPlayers([player1, player2]);
game.splitDeck();
console.log(game);

export default {
  name: "Game",
  props: {
    msg: String
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
