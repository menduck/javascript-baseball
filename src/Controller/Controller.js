const { baseballMaker } = require("../Model/BaseballMaker")
const OutputView = require("../View/OutputView")
const { Console } = require("@woowacourse/mission-utils");
const InputView = require("../View/InputView");
const BaseballGame = require("../Model/BaseballGame");
const { SUCCESS, RETRY_OR_GAMEOVER } = require("../Constant");


class Controller {
  #answer
  constructor() {
    this.baseballGame = new BaseballGame;
  }

  printgameGuide() {
    OutputView.printGameStartMessage()
    this.gameStart()
  }

  gameStart() {
      this.askUserThreeNumbers()
      this.getGameAnswer()
      Console.print(this.#answer)
  }

  getGameAnswer() {
    this.#answer = baseballMaker();
  }

  askUserThreeNumbers() {
    InputView.readUserNumbers(this.getHintCount.bind(this))
  }

  getHintCount(userThreeNumbers) {
    [this.strikeCount,this.ballCount] = 
    [this.baseballGame.matchStrike(userThreeNumbers,this.#answer),
    this.baseballGame.matchBall(userThreeNumbers,this.#answer)];
  
    this.printResult()
  }
  printResult() {
    OutputView.printMap(this.strikeCount,this.ballCount)
    this.isSuccess()
  }

  isSuccess() {
    this.strikeCount === SUCCESS ?  this.askOptionNumber() :this.askUserThreeNumbers()
  }

  askOptionNumber() {
    InputView.readOptionNumber(this.retryOrGameOver.bind(this))
  }

  retryOrGameOver(option) {
    if(option === RETRY_OR_GAMEOVER.retry ) this.gameStart()
    this.gameOver()
  }

  gameOver() {
    Console.close()
  }

}

module.exports = Controller