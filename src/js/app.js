class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    this.characters.push(character);
    return this;
  }
 
  get(idx) {
    return this.characters[idx];
  }
 

  [Symbol.iterator]() {
    return new RouteIterator(this); 
  }
 }
 class RouteIterator {
  _route; 
  _nextIdx; 
 
  constructor(route) {
   this._route = route;
   this._nextIdx = 0;
  }
 
  next() {
   if (this._nextIdx === this._route.characters.length) {
    return { done: true } 
   }
 
   const result = {
    value: this._route.get(this._nextIdx),
    done: false
   }
 
   this._nextIdx++;
 
   return result;
  }
 }
