class CarGame {
  constructor() {
    
  }
  randomNumberOfcarUser(userName, generate){
    userName.reduce((acc,curr) => {
      return { ...acc, [curr] : generate()}
    },{})
  }
}

module.exports = CarGame;