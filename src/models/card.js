export class Card {
  constructor({ name, value, color, type }) {
    this.name = name;
    this.value = value;
    this.color = color;
    this.type = type;
    this.assignedTo = null;
  }

  assignPlayer(player) {
    this.assignedTo = player;
  }
}