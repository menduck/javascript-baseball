const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE : {outputGameStartMessage, gameResultMessage} , RESULT_MESSAGE } = require("../Constant");

const OutputView = {
  printGameStart() {
    Console.print(outputGameStartMessage);
  },

  printGameOver() {
    Console.print(gameResultMessage)
  },
  
  printMap([carUsers, goingUser]) {
    Console.print(RESULT_MESSAGE.result(carUsers, goingUser));   
  },

  printWinnerUser(winnerUsers) {
    Console.print(RESULT_MESSAGE.winnerMessage(winnerUsers))
  }
}

module.exports = OutputView;