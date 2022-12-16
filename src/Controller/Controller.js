const CarGame = require("../Model/carGame");
const InputView = require("../View/InputView");
const { Console } = require("@woowacourse/mission-utils");
const RandomGenerator = require("../utils/RandomGenerator");
const OutputView = require("../View/OutputView");

class Controller {
  constructor() {
    this.carGame = new CarGame();
  }
  /*
  saveInput(넘겨받는인풋값){
    try{
      validation.input(넘겨받는인풋값);
      this.저장할인풋 = 넘겨받는인풋값;
      this.그다음단계호출
    } catch {
      // 다시 인풋값 받기
    }
  } */
  askInputCarUsersName() {
    InputView.readCarUsersName(this.saveCarUsersName.bind(this));
  }
  saveCarUsersName(userNameArr) {
    this.userNameArr = userNameArr;
    this.askInputGameTrial();
  }

  askInputGameTrial() {
    InputView.readGameTrial(this.saveGameTrial.bind(this));
  }
  saveGameTrial(trialNumber) {
    this.trialNumber = trialNumber;
    this.setCarInfo();
  }
  setCarInfo() {
    this.carGame.carInfo(this.userNameArr);
    this.printGameOver()
  }

  printGameOver() {
    OutputView.printGameOverGuide();
    this.repeatTrial()
  }

  isMove() {
    this.carGame.randomNumberOfcarUser(this.userNameArr,RandomGenerator.generate);
    this.countOfUsers = this.carGame.move()
    this.printResult()
  }

  printResult(){
    Object.entries(this.countOfUsers).filter((countOfUser) => OutputView.PrintResult(countOfUser))

    Console.print('\n')
    }

  repeatTrial(){
    this.isMove()
    while(this.trialNumber>0) {
      this.isMove()
      this.trialNumber--
    }

  }
}

module.exports = Controller;
