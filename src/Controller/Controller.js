const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const {Console} = require("@woowacourse/mission-utils");
const {generate} = require("../utils/RandomGenerator");
const Car = require("../Model/Car");
const {Validation : {isValidUserName, isVaildTrial}}= require("../Validation");


class Controller {
  constructor() {
    this.car = new Car()
    this.currentResult = {}
  }

  gameStart() {
    OutputView.printGameStart();
    this.askCarname();
  }

  askCarname() {
    InputView.readCarName(this.saveCarUser.bind(this))
  }

  saveCarUser(carName) {
    this.carUsers = isValidUserName(carName);
    this.askTrial();
  }

  askTrial() {
    InputView.readTrial(this.saveTrial.bind(this))
  }
  
  saveTrial(number) {
    this.trial = number;
  }

  getGoUsers() {
    this.car.setUsersRandomNumber(this.carUsers,generate);
    this.goingUser = this.car.moveingUser() //[ 'a', 'c', 'd' ]
  }

  printResult() {
    this.goingUser
  }

  

}

module.exports = Controller