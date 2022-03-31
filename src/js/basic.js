export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Уже есть такой персонаж');
    } return this.members.add(character);
  }

  getChar() {
    this.members.forEach((el) => console.log(el))
  }
}