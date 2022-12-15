const { CAR_GO_RANGE_INCLUSIVE } = require("../Constant");



class Car {
  constructor() {

  }

  setUsersRandomNumber(carUsers,generator){
    return carUsers.reduce((acc,curr) => {
      return {...acc, [curr]: generator() };
    }, new Object)
    
  }

  moveingUser(randomNumberOfUsers)  {
    const keysOfUsers = Object.keys(randomNumberOfUsers);
    return keysOfUsers.filter((number) => randomNumberOfUsers[number] >= CAR_GO_RANGE_INCLUSIVE )

  }
}

module.exports = Car;