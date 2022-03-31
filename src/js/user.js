class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    this.characters.push(character);
    return this;
  }
  getChar() {
    this.characters.forEach(element => {
      console.log(element)
    });
  }
}