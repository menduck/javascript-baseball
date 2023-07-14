const { CAR_MOVE_MIN_INCLUSIVE } = require("../Constant");

class CarGame {
  #userGoCount;
  
  constructor() {
    this.carNames = {};
    this.#userGoCount = {};
  }
  carInfo(userName) {
    this.carNames = Object.values(userName);
    this.carNames.map((user) => (this.#userGoCount[user] = 0));
  }

  randomNumberOfcarUser(userName, generate) {
    this.randomNumberOfUsers = userName.reduce((acc, curr) => {
      return { ...acc, [curr]: generate() };
    }, {});
  }

  move() {
    for (let key in this.randomNumberOfUsers) {
      if (this.randomNumberOfUsers[key] >= CAR_MOVE_MIN_INCLUSIVE)
        this.#userGoCount[key]++;
    }
    return this.#userGoCount;
  }

  findWinner() {
    const winnerMaxNumber = Math.max(...Object.values(this.#userGoCount));
    const winner = [];
    for (let car in this.#userGoCount) {
      if (this.#userGoCount[car] === winnerMaxNumber) winner.push(car);
    }
    return winner.join(", ");
  }
}

module.exports = CarGame;
