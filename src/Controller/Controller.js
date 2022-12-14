const { baseballMaker } = require("../Model/BaseballMaker")
const OutputView = require("../View/OutputView")
const { Console } = require("@woowacourse/mission-utils");
const InputView = require("../View/InputView");
const BaseballGame = require("../Model/BaseballGame");


class Controller {
  #answer

  constructor() {
    this.baseballGame = new BaseballGame;
  }

  gameStart() {
    OutputView.printGameStartMessage()
    this.getGameAnswer()
    Console.print(this.#answer)
    this.askUserThreeNumbers()
  }

  getGameAnswer() {
    this.#answer = baseballMaker()
  }

  askUserThreeNumbers() {
    InputView.readUserNumbers(this.getHintCount.bind(this))
  }

  getHintCount(userThreeNumbers) {
    const [strikeCount,ballCount] = 
    [this.baseballGame.matchStrike(userThreeNumbers,this.#answer),
    this.baseballGame.matchBall(userThreeNumbers,this.#answer)]

    // Console.print([strikeCount,ballCount])
  }

}

module.exports = Controller