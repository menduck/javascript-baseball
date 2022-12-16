const CarGame = require("../Model/carGame");
const InputView = require("../View/InputView");
const { Console } = require("@woowacourse/mission-utils");
const RandomGenerator = require("../utils/RandomGenerator");
const OutputView = require("../View/OutputView");
const Validation = require("../Validation");

class Controller {
  constructor() {
    this.carGame = new CarGame();
  }

  askInputCarUsersName() {
    InputView.readCarUsersName(this.saveCarUsersName.bind(this));
  }
  saveCarUsersName(userNameArr) {
    try {
      Validation.isVaildCarName(userNameArr);
      this.userNameArr = userNameArr;
      this.askInputGameTrial();
    } catch {
      this.askInputCarUsersName();
    }
  }

  askInputGameTrial() {
    InputView.readGameTrial(this.saveGameTrial.bind(this));
  }
  saveGameTrial(trialNumber) {
    try {
      Validation.isValidTrialNumber(trialNumber);
      this.trialNumber = trialNumber;
      this.setCarInfo();
    } catch {
      this.askInputGameTrial();
    }
  }
  
  setCarInfo() {
    this.carGame.carInfo(this.userNameArr);
    this.printGameOver();
  }

  printGameOver() {
    OutputView.printGameOverGuide();
    this.repeatTrial();
  }

  isMove() {
    this.carGame.randomNumberOfcarUser(
      this.userNameArr,
      RandomGenerator.generate
    );
    this.countOfUsers = this.carGame.move();
    this.printResult();
  }

  printResult() {
    Object.entries(this.countOfUsers).filter((countOfUser) =>
      OutputView.PrintResult(countOfUser)
    );

    Console.print("\n");
  }

  repeatTrial() {
    this.isMove();
    while (this.trialNumber > 0) {
      this.isMove();
      this.trialNumber--;
    }
    this.printWinner();
  }

  printWinner() {
    OutputView.printWinnerCar(this.carGame.findWinner());
    Console.close();
  }
}

module.exports = Controller;
