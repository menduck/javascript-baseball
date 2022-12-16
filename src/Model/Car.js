const { GO_MIN_INCLUSIVE } = require("../util/Constant");

class Car {
  constructor(){
    this.cars = {}
    this.carRanking = {}
  }
  randomNumberOfCar(carsName,generate){ // {a: 5, b : 8}
    this.randomNumberOfCarObj = carsName.reduce((acc,curr)=>{
      return {...acc,[curr]:generate()}
    },{})
  }


}

module.exports = Car;