class CarGame {
  constructor() {
    this.userGoCount = {}
  }
  carInfo(userName) {
    this.carNames = Object.values(userName); // {'a','b','c'}
    this.userGoCount = this.carNames.map((user) => this.userGoCount[user] = 0)
  }
  randomNumberOfcarUser(userName, generate){
    userName.reduce((acc,curr) => {
      return { ...acc, [curr] : generate()}
    },{})
  }
}

module.exports = CarGame;