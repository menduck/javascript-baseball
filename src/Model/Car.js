const { GO_MIN_INCLUSIVE } = require("../util/Constant");

class Car {
  #carRanking

  constructor(){
    this.cars = {}
    this.#carRanking = {}
  }

  carCountInfo(carNames){
    this.cars = Object.values(carNames)
    this.cars.map((v) => this.#carRanking[v] = 0 )
  }

  randomNumberOfCar(carsName,generate){ // {a: 5, b : 8}
    this.randomNumberOfCarObj = carsName.reduce((acc,curr)=>{
      return {...acc,[curr]:generate()}
    },{})
  }

  move(){
    for(let key in this.randomNumberOfCarObj){
      if(this.randomNumberOfCarObj[key] >= GO_MIN_INCLUSIVE) this.#carRanking[key]++
    } return this.#carRanking;
  }

  getWinner() {
    this.maxRanking = Math.max(...Object.values(this.#carRanking))
    
  }
}

module.exports = Car;