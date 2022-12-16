const Car = require("../Model/Car");
const RandomGenerator = require("../util/RandomGenerator");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const { Console } = require("@woowacourse/mission-utils");

class Controller {
  constructor() {
    this.car = new Car();
  }
  printGameStart() {
    OutputView.printGameTitle();
    this.askInputCarNames();
  }

  askInputCarNames() {
    InputView.readCarUsers(this.saveInputCarNames.bind(this));
  }
  saveInputCarNames(carNames) {
    this.carNames = carNames;
    this.askInputTrialNumber();
  }
  askInputTrialNumber() {
    InputView.readGameTrial(this.saveTrialNumber.bind(this));
  }
  saveTrialNumber(trialNumber) {
    this.trialNumber = trialNumber;
    this.retryGame();
  }

  isMove() {
    this.car.randomNumberOfCar(this.carNames, RandomGenerator.generate);
    this.countUsers = this.car.move();
    this.printResult();
  }

  retryGame() {
    this.car.carCountInfo(this.carNames);
    while (this.trialNumber > 0) {
      this.isMove();
      this.trialNumber--;
    }
  }

  printResult() {
    Object.entries(this.countUsers).forEach((v) => OutputView.printResult(v));

    Console.print('\n')
  }
}

module.exports = Controller;
