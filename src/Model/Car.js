const { CAR_GO_RANGE_INCLUSIVE } = require("../Constant");



class Car {
  constructor() {
    this.randomNumberOfUsers = {};
  }

  setUsersRandomNumber(carUsers,generator){
    this.randomNumberOfUsers = carUsers.reduce((acc,curr) => {
      return {...acc, [curr]: generator() };
    }, new Object)
  }

  moveingUser()  {
    const keysOfUsers = Object.keys(this.randomNumberOfUsers);
    return keysOfUsers.filter((number) => this.randomNumberOfUsers[number] >= CAR_GO_RANGE_INCLUSIVE )

  }
}

module.exports = Car;