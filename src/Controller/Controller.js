const OutputView = require("../View/OutputView");
const InputView = require("../View/InputView");
const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("../utils/RandomGenerator");
const Car = require("../Model/Car");
const {
  Validation: { isValidUserName, isVaildTrial },
} = require("../Validation");

class Controller {
  constructor() {
    this.car = new Car();
  }

  gameStart() {
    OutputView.printGameStart();
    this.askCarname();
  }

  askCarname() {
    InputView.readCarName(this.saveCarUser.bind(this));
  }

  saveCarUser(carNames) {
    try {
      isValidUserName(carNames);
      this.carUsers = carNames; // [ 'a', 'b', 'c' ]
      this.askTrial();
    } catch {
      this.askCarname();
    }
  }

  askTrial() {
    InputView.readTrial(this.saveTrial.bind(this));
  }

  saveTrial(number) {
    try {
      isVaildTrial(number);
      this.trial = number;
      this.printGameOver();
    } catch {
      this.askTrial();
    }
  }

  printGameOver() {
    OutputView.printGameOver();
    this.getInfo();
  }

  trialGame() {
    while (this.trial > 0) {
      this.getGoUsers();
      this.trial--;
    }
    this.printWinner();
  }

  getInfo() {
    this.car.Carinfo(this.carUsers); // [ 'a', 'b', 'c' ]
    this.trialGame();
  }

  getGoUsers() {
    this.car.setUsersRandomNumber(this.carUsers, generate);
    this.goingUser = this.car.moveingUser(); //{ a: 1, b: 1, c: 0, d: 1, e: 1 }
    this.printResult();
  }

  printResult() {
    Object.entries(this.goingUser).forEach((v) => OutputView.printMap(v));

    Console.print("\n");
  }

  printWinner() {
    OutputView.printWinnerUser(this.car.winngerUser(this.goingUser));
    Console.close();
  }
}

module.exports = Controller;
