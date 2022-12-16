const { CAR_GO_RANGE_INCLUSIVE } = require("../Constant");

class Car {
  constructor() {
    this.cars = {}; // [a,b,c,d,f]
    this.carRanking = {}; //{ a: 0, b: 1, c: 0, d: 0, e: 1 }
  }
  Carinfo(users) {
    this.cars = Object.values(users); //[a,b,c,d,f]
    this.cars.map((v) => this.carRanking[v] = 0);
  }

  setUsersRandomNumber(carUsers,generator){  // {a: 3, b: 1, c: 8, d: 9, f: 6}
    this.randomNumberOfUsers = carUsers.reduce((acc,curr) => {
      return {...acc, [curr]: generator()}
    },{})
    
  }

  moveingUser()  { 
    for(let key in this.randomNumberOfUsers) {
      if(this.randomNumberOfUsers[key] >= CAR_GO_RANGE_INCLUSIVE)
      this.carRanking[key]++
    }

    return this.carRanking
  }

  winngerUser(totalCountObj) {
    const maxCount = Math.max(...Object.values(totalCountObj))
    const winnerUsers = [];
    for(let carUser in totalCountObj) {
      if(totalCountObj[carUser] === maxCount) winnerUsers.push(carUser)
    }
    return winnerUsers.join(', ')
  }
}

module.exports = Car;