class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    this.characters.push(character);
    return this;
  }
 
  // метод получения станции по id
  get(idx) {
    return this.characters[idx];
  }
 
  // реализация итератора
  [Symbol.iterator]() {
    return new RouteIterator(this); // разберем ниже
  }
 }
 class RouteIterator {
  _route; // доступ до итерируемого объекта
  _nextIdx; // указатель следующего значения
 
  constructor(route) {
   this._route = route;
   this._nextIdx = 0;
  }
 
  next() {
   if (this._nextIdx === this._route.characters.length) {
    return { done: true } // проверка на последний элемент
   }
 
   const result = {
    value: this._route.get(this._nextIdx),
    done: false
   }
 
   this._nextIdx++;
 
   return result;
  }
 }
