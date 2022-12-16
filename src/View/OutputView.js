const {Console} = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE : {gameTitle}, RESULT_MESSAGE } = require("../util/Constant");

const OutputView = {
  printGameTitle() {
    Console.print(gameTitle)
  },

  printResult([user,count]) {
      Console.print(RESULT_MESSAGE.currentPostion(user,count))
  }
}


module.exports = OutputView