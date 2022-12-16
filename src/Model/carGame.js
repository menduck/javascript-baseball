class CarGame {
  #userGoCount
  constructor() {
    this.carNames = {};
    this.#userGoCount = {};
  }
  carInfo(userName) {
    this.carNames = Object.values(userName); 
    this.carNames.map((user) => this.#userGoCount[user] = 0)
  }

  randomNumberOfcarUser(userName, generate){
    this.randomNumberOfUsers = userName.reduce((acc,curr) => {
      return { ...acc, [curr] : generate()}
    },{})
  }

  move() {
    for(let key in this.randomNumberOfUsers) {
      if(this.randomNumberOfUsers[key] >=4) this.#userGoCount[key]++
    } return this.#userGoCount
  }
}

module.exports = CarGame;