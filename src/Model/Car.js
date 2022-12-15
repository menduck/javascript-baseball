const {generate} = require("../utils/RandomGenerator");


class Car {
  
  setUsersRandomNumber(carUsers,generator){
    return carUsers.reduce((acc,curr) => {
      return {...acc, [curr]: generator() };
    }, new Object)
  }
}

module.exports = Car;